FROM node:20-alpine
WORKDIR /usr/src
RUN npm install -g pnpm
COPY . .
RUN pnpm install
RUN pnpm run build
ENV HOST=0.0.0.0 PORT=3000
EXPOSE $PORT
ENTRYPOINT [ "node","dist/server/entry.mjs" ]
