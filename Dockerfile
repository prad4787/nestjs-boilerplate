FROM node:20-alpine3.18

WORKDIR /app

# Add user to handle permissions

# Install dependencies first (for better caching)
COPY package*.json ./
RUN npm install -g @nestjs/cli


# Then copy the rest of the application
COPY . .


# expose from env file 
EXPOSE $PORT

CMD ["npm", "run", "dev"]