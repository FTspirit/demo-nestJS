# Use Alpine with Node.js 20 as the base image
FROM node:22-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the entire project
COPY . .

# Build the NestJS application
RUN yarn build

# Expose the server port (default 3000)
EXPOSE 3000

# Command to run the application
CMD ["yarn", "start:prod"]
