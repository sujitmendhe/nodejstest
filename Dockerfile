# 1. Use official Node.js base image
FROM node:18-alpine

# 2. Create app directory inside container
WORKDIR /app

# 3. Copy package files first (best practice for caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install --production

# 5. Copy application source code
COPY server.js .

# 6. Expose application port
EXPOSE 3000

# 7. Start the application
CMD ["node", "server.js"]
