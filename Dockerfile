# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

# Enable corepack so pnpm is available
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Install dependencies (leverages layer cache when lockfile unchanged)
COPY package.json pnpm-lock.yaml ./
COPY patches/ ./patches/
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm build

# ── Stage 2: Runtime ──────────────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Only copy the compiled output — no source, no devDeps
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]
