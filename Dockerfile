# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build the Vite frontend
RUN npm run build

# Install static server
RUN npm install -g serve

# Expose port and run
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3001"]