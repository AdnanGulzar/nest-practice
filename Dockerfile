# Use an official Node.js image as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install NestJS dependencies
RUN npm install

# Copy the entire application to the working directory
COPY . .

# Expose the port your app runs on (adjust as per your NestJS app configuration)
EXPOSE 3000

# Start the NestJS application
CMD ["npm", "run", "start:prod"]

