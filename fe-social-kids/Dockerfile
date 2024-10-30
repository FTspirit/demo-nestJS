# Use Node.js as the base image
FROM node:22-alpine as build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the React application
RUN npm run build

# Use Nginx to serve the built application
FROM nginx:alpine

# Copy the build files to Nginx's default directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port for Nginx
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]