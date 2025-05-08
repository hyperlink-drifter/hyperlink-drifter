FROM node:22.15.0-alpine AS builder

WORKDIR /app

# import dependencies
ADD package.json .

RUN npm install

# copy assets
COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]