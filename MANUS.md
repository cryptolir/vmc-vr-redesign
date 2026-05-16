# Instructions for Manus

This repo is deployed via **Coolify** using the Dockerfile at the repo root.
Coolify auto-builds and serves the container on every push to `main`.
**Do not break the build/runtime setup described below**, or production will go down.

---

## Critical rules — do not change without understanding why

### 1. The esbuild build command must keep the `createRequire` banner

In `package.json`, the `build` script is:

```json
"build": "vite build && esbuild server/index.ts --platform=node --bundle --format=esm --outfile=dist/index.js --banner:js=\"import { createRequire } from 'module'; const require = createRequire(import.meta.url);\""
```

**Why this exact shape:**
- `--bundle` (no `--packages=external`) → all server deps (Express, etc.) are bundled into a single self-contained `dist/index.js`. The runtime container has **no `node_modules`**.
- `--format=esm` is required because `package.json` has `"type": "module"` and the server source uses `import.meta.url`.
- The `--banner` injects a CommonJS `require` function at the top of the bundle. **Without it, Express crashes at startup** with `Dynamic require of "path" is not supported` because Express internally uses CJS `require()` for Node built-ins, and esbuild's ESM output has no native `require`.

**Never:**
- Add `--packages=external` back. This forces pnpm install at runtime, and pnpm's symlink-based `node_modules` breaks in Docker.
- Switch to `--format=cjs` without also changing `server/index.ts` (it uses `import.meta.url`).
- Remove the `--banner` flag.

### 2. The Dockerfile runtime stage must NOT run `pnpm install`

The current runtime stage only copies `dist/` from the builder. It does not install any dependencies. Everything the server needs is bundled into `dist/index.js`.

**Never** add `pnpm install` (or `npm install`, `yarn install`) to the runtime stage.

### 3. Vite output path

Vite outputs the client build to `dist/public/` (set in `vite.config.ts`, `build.outDir`).
The server (`server/index.ts`) serves static files from `path.resolve(__dirname, "public")` in production — i.e. it expects `dist/public/` to sit next to `dist/index.js`. Do not change either path without changing the other.

### 4. Server entry point

- Source: `server/index.ts`
- Built output: `dist/index.js`
- Container CMD: `node dist/index.js`
- Listens on `process.env.PORT || 3000`. Coolify sets `PORT=3000` via the Dockerfile.

### 5. Healthcheck

The Dockerfile has a `HEALTHCHECK` using `wget` against `http://localhost:3000/`. Coolify uses this to verify the container started successfully. If you change the port or remove the root route, update the healthcheck too.

---

## Adding new content / features — what's safe

- **Adding pages, components, styles, content text** → 100% safe, just edit files under `client/`.
- **Adding new npm dependencies (client-side)** → safe, they get bundled by Vite.
- **Adding new server dependencies** → safe, they get bundled by esbuild into `dist/index.js`.
- **Adding API routes in `server/index.ts`** → safe.
- **Adding static assets** → put them under `client/public/` (Vite copies them to `dist/public/`).

## What requires careful review

- Changing `vite.config.ts` `build.outDir` → must match what `server/index.ts` serves from.
- Changing `package.json` `build` or `start` scripts → see rules above.
- Changing the `Dockerfile` → see rules above.
- Adding native Node modules (with `.node` binaries) → they can't be bundled by esbuild and will require a different deployment strategy. Avoid if possible.

---

## How to test before pushing

Run locally:

```bash
pnpm install
pnpm build
node dist/index.js
```

Then open http://localhost:3000 — if the site loads, the deploy will work.
