# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Enable pnpm via corepack (matches "packageManager" field in package.json)
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

# Install deps with the exact lockfile
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches
RUN pnpm install --frozen-lockfile

# Build the app (vite + esbuild)
COPY . .
RUN pnpm run build

# ---- Runtime stage ----
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

COPY package.json pnpm-lock.yaml ./
COPY patches ./patches
RUN pnpm install --frozen-lockfile --prod

COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["pnpm", "start"]
