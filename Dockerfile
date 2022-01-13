FROM node:14.16.1

WORKDIR /app

COPY package.json ./ 

RUN npm install

COPY . .
ENV PORT 3000

EXPOSE 3000
CMD ["npm", "start"]`