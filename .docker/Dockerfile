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

# Production stage with nginx
FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
