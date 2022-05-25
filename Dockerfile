ARG NODE_VERSION=14-alpine3.14
FROM node:${NODE_VERSION} as builder
ENV APP_ROOT /opt/app

WORKDIR ${APP_ROOT}

RUN apk update && apk add build-base \
    autoconf \
    automake \
    libtool \
    pkgconfig \
    nasm \
    python3 \
    g++ \
    vips-dev \
    && rm -rf /var/cache/apk/*

COPY ./package.json .

COPY ./yarn.lock .

RUN yarn

# Our Libarary uses sharp and this image 
FROM node:${NODE_VERSION}

ENV APP_ROOT /opt/app
ENV CHOKIDAR_USEPOLLING=1

# Install Sharp
RUN apk add --update \
  --repository http://dl-3.alpinelinux.org/alpine/edge/testing \
  vips-tools \
  && rm -rf /var/cache/apk/*

RUN npm install -g gatsby-cli

WORKDIR ${APP_ROOT}
# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230

LABEL maintainer="tbrantleyii@gmail.com"

COPY --from=builder ${APP_ROOT} .

COPY . .

ENTRYPOINT [ "yarn", "develop"]