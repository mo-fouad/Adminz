#starting from a base image
FROM node:alpine
WORKDIR /user/app

#copy project files into our env folder, and get ready to install
#installing dependances for the project
RUN apk update && apk add bash
COPY ./package.json ./
RUN yarn install
COPY ./ ./

#run commandes & have fun :D
CMD ["yarn", "start"]