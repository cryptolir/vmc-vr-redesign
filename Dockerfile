# ---------- Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Enable pnpm via corepack at the version declared in package.json
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

# Install ALL deps (incl. dev) — needed for vite/esbuild/typescript at build time
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches
RUN pnpm install --frozen-lockfile

# Copy the rest of the source and build
COPY . .
RUN pnpm run build

# ---------- Runtime stage ----------
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

# pnpm again for the prod install
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

# Install ONLY production deps (express, socket.io, react runtime, etc.)
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches
RUN pnpm install --frozen-lockfile --prod

# Bring the built output from the builder stage
COPY --from=builder /app/dist ./dist

# Optional: include curl so Coolify's healthcheck works
RUN apk add --no-cache curl

EXPOSE 3000
CMD ["pnpm", "start"]
