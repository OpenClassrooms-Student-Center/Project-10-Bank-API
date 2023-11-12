FROM node:12.22.1

# Dockerize is required to wait for the MongoDB container to be ready.ENV DOCKERIZE_VERSION v0.6.1
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# This script starts 'npm run dev:server' and, once the app is running,
# it executes the script to populate the database.
COPY startServerAndPopulate.sh .
RUN chmod +x startServerAndPopulate.sh

CMD dockerize -wait tcp://mongo_db:27017 -timeout 30s ./startServerAndPopulate.sh
