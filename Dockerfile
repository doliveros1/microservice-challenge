FROM node:15.14-alpine
LABEL maintainer=doliveros@minsait.com

COPY package*.json /
WORKDIR /
RUN npm install
COPY ./ /
ENTRYPOINT [ "npm" ]
CMD ["start"]