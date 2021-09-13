FROM node
MAINTAINER Daniel Lopez
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD npm start