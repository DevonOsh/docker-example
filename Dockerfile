FROM node:16 AS ui-build
WORKDIR /usr/src/app
COPY docker-example-ui/ ./docker-example-ui/
RUN cd docker-example-ui && npm install @angular/cli && npm install && npm run build

FROM node:16 as server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/docker-example-ui/dist ./docker-example-ui/dist
COPY package*.json ./
RUN npm install
COPY server.js .

EXPOSE 2080

CMD ["node","server.js"]
