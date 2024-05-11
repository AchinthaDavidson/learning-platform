# Base image (choose appropriate image for your technology stack)
FROM node:16-alpine AS build-stage  
# Working directory within the container
WORKDIR /app

# Copy application code (adjust paths as needed)
COPY package*.json ./  
RUN npm install  # Install dependencies (adjust command for your technology stack)

# Base image for the final container (smaller and optimized)
FROM node:16-alpine

# Expose port (adjust port number if needed)
EXPOSE 8071  

# Start command (adjust command for your technology stack)
CMD [ "npm", "start" ]
