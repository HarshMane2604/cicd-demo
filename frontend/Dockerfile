# Stage 1: Build the React app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Serve the built app with Nginx
FROM nginx:alpine

# Copy the built assets from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
