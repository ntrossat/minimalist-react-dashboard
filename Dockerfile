FROM node:lts AS react

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci

COPY . .
CMD [ "npm", "run", "dev"]