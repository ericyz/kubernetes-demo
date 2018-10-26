FROM node:9.0.0
ADD package.json /src/

WORKDIR /src
RUN npm install

ADD src ./src
ADD server ./server
ADD .babelrc .
ADD webpack.config.js .
ADD index.html .
RUN npm run build

ENTRYPOINT [ "npm", "start" ]
