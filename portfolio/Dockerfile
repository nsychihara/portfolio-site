FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY . .

EXPOSE 8080
ENV HOST=0.0.0.0

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0" ]