#alpine is Lite node version
FROM node:16-alpine

#MAINTAINER pyprism
# Create app directory
WORKDIR /home/server/swyger/storage/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
#RUN npm install -g nodemon
RUN npm install


# If you are building your code for production
# RUN npm ci --only=production

#Copy from . to .
COPY . ./

#EXPOSE 4500

#CMD npm run dev
CMD npm run start
