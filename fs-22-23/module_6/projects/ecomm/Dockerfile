# Install nodejs with specific version
FROM node:21.0.0-slim

# All my docker code should run at "/app" location of the os
WORKDIR /app

# Copy all my code from current folder to docker's folder
COPY . /app/

# Install all pacakges present in package.json
RUN npm i

# Start the project
CMD [ "node", "index.js" ]