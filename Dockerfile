FROM node:14-alpine3.12


WORKDIR /app
COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]