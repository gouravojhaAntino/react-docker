FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --production
RUN npm install -g serve
CMD serve -s build
EXPOSE 3000