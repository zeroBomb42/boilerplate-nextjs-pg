# Stage 1: Build Stage
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build

# Stage 2: Production Stage
FROM node:22-alpine
WORKDIR /app
COPY --from=build /app /app
RUN apk add --no-cache postgresql-client
EXPOSE 3099
COPY ./docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
CMD ["npm", "run", "start"]
