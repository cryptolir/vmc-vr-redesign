# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

# Enable corepack and pin pnpm to exact version from package.json
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

WORKDIR /app

# Install deps first (better layer caching)
COPY package.json pnpm-lock.yaml ./
COPY patches/ ./patches/
RUN pnpm install --frozen-lockfile

# Copy all source and build
COPY . .
RUN pnpm build

# Verify output before handing off to runtime stage
RUN ls -la dist/ && ls -la dist/public/

# ── Stage 2: Runtime ──────────────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/dist ./dist

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s \
  CMD wget -qO- http://localhost:3000/ || exit 1

CMD ["node", "dist/index.js"]
