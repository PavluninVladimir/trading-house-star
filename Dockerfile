# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Build Nuxt 3 Project
RUN npm run build

# Run npm start when the container launches
CMD ["node", ".output/server/index.mjs"]
