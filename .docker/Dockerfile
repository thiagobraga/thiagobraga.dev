LABEL version="1.0-bun-migration"
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
RUN bun build ./index.html --production --outdir ./dist

# Production stage (optional but good for serving)
FROM base AS production
COPY --from=build /app/dist /app/dist
USER bun
EXPOSE 8080
CMD ["bun", "serve", "./dist", "--port", "8080"]
