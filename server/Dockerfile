FROM node:14

WORKDIR /app/server

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]