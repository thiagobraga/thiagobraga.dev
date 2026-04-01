FROM oven/bun:1-alpine AS base
WORKDIR /app

# Dev stage
FROM base AS development
COPY --chown=bun:bun package.json bun.lockb ./
RUN bun install
COPY --chown=bun:bun . .
USER bun
EXPOSE 8080
CMD ["bun", "run", "dev"]

# Build stage
FROM base AS build
COPY --chown=bun:bun package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY --chown=bun:bun . .
USER bun
RUN bun run build
