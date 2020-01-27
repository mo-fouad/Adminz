#starting from a base image
FROM node:alpine

#copy project files into our env folder, and get ready to install
COPY ./ ./

#installing dependances for the project
RUN yarn install

#run commandes & have fun :D
CMD ["yarn", "start"]