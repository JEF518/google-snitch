FROM node:14.15.1 as base

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

RUN npm ci

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]