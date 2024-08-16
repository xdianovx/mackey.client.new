FROM node:lts-alpine as build-stage

WORKDIR /app

COPY ./client/package.json .

RUN npm install

COPY ./client .

RUN npm run build

EXPOSE 3000
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["node", "/app/.output/server/index.mjs"]