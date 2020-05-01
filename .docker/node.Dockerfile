FROM node:12.16.1-alpine3.11 AS base
WORKDIR /app
EXPOSE 3000
CMD HTTPS=true yarn start

FROM base AS backend-env
COPY backend/package.json backend/yarn.lock ./
RUN yarn

FROM base AS backend
COPY --from=backend-env /app/node_modules ./node_modules
