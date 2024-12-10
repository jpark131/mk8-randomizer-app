FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install serve
COPY . .
RUN npx expo export -p web
EXPOSE 3000
CMD ["npx", "serve", "-p", "3000", "dist", "--single"]
