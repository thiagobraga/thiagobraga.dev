FROM oven/bun:1.1.20-debian AS base
WORKDIR /app

# development
FROM base AS development
COPY --chown=bun:bun .docker/entrypoint.sh /entrypoint.sh
COPY --chown=bun:bun . .
RUN mkdir -p /app/dist \
  && chmod +x /entrypoint.sh \
  && bun i \
  && chown -R bun:bun .
USER bun
EXPOSE 5173
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
