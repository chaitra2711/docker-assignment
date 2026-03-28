FROM node:18-alpine

WORKDIR /app

# Copy only package.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
