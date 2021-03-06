# Use official Ruby's default image as a base
FROM node:10.6-alpine

# Create an environment variable for our default installation path
ENV INSTALL_PATH /usr/src/web

# Create INSTALL_PATH if it does not exist
RUN mkdir -p $INSTALL_PATH

# Set INSTALL_PATH as the main directory
WORKDIR $INSTALL_PATH

COPY package.json yarn.lock ./

RUN yarn install

CMD yarn run dev