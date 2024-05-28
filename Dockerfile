# Use Node.js as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the app files
COPY . .

# Build the React app
RUN npm run build

# Expose port 4000 (you can change this if needed)
EXPOSE 3000

# Define the start command
CMD ["npm", "start"]
