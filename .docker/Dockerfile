FROM oven/bun:1.1.20-alpine AS base
WORKDIR /app

# development
FROM base AS development
COPY --chown=bun:bun .docker/entrypoint.sh /entrypoint.sh
RUN apk add --no-cache su-exec libstdc++ \
  && mkdir -p /app/dist \
  && chmod +x /entrypoint.sh
COPY --chown=bun:bun . .
# USER bun
EXPOSE 8080
ENTRYPOINT ["/entrypoint.sh"]
CMD ["bun", "dev"]

# build
FROM base AS build
COPY --chown=bun:bun package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY --chown=bun:bun . .
USER bun
RUN bun build ./index.html --production --outdir ./dist

# production
FROM base AS production
COPY --from=build /app/dist /app/dist
USER bun
EXPOSE 8080
CMD ["bun", "serve", "./dist", "--port", "8080"]
