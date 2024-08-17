# FROM node:lts-alpine as build-stage

# WORKDIR /app

# COPY ./client/package.json .

# RUN npm install

# COPY ./client .

# RUN npm run build

# EXPOSE 3000
# ENV NODE_TLS_REJECT_UNAUTHORIZED=0
# ENV NUXT_HOST=0.0.0.0
# ENV NUXT_PORT=3000

# CMD ["node", "/app/.output/server/index.mjs"]

# 1. Используем официальный Node.js образ в качестве базового
FROM node:lts as build-stage

# 2. Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# 3. Копируем файлы package.json и package-lock.json для установки зависимостей
COPY package.json .
COPY package-lock.json .

# 4. Устанавливаем зависимости. Используем npm ci для быстрой и воспроизводимой установки
RUN npm ci --legacy-peer-deps

# 5. Копируем оставшиеся файлы проекта в рабочую директорию
COPY . .

# 6. Сборка приложения Nuxt
RUN npm run build

# 7. Переходим к созданию финального образа для продакшена
FROM node:18 as production-stage

# 8. Устанавливаем рабочую директорию в финальном образе
WORKDIR /app

# 9. Копируем только необходимые файлы из стадии сборки
COPY --from=build-stage /app/.output /app/.output

# 10. Устанавливаем зависимости для запуска приложения в продакшене
COPY package.json .
COPY package-lock.json .
RUN npm ci --omit=dev --legacy-peer-deps

# 11. Устанавливаем переменные среды
ENV NODE_ENV=production

# 12. Указываем команду для запуска Nuxt приложения
CMD ["node", ".output/server/index.mjs"]

# 13. Указываем порт, который будет использоваться
EXPOSE 3000
