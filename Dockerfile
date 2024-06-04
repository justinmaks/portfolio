# Use the official Node.js 20 image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Install a simple web server for serving static files
RUN npm install -g serve

# Expose port 5000 to the outside world
EXPOSE 5000

# Command to run the web server and serve the built React app
CMD ["serve", "-s", "build", "-l", "5000"]
