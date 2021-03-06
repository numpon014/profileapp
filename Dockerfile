#------------------------------------------------------------------------------
# Builder Image
#------------------------------------------------------------------------------
FROM node:14-alpine AS builder

ARG BUILD_NUMBER=BUILD_NUMBER
ARG REVISION=REVISION

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . /usr/src/app

RUN yarn build

RUN sed -e "s;%DATE%;$(date);g" -e "s;%BUILD%;${BUILD_NUMBER};g" -e "s;%REVISION%;${REVISION};g" version.template.json > build/version.json

#------------------------------------------------------------------------------
# Result Image
#------------------------------------------------------------------------------
FROM node:14-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/server ./server
COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/yarn.lock .

RUN yarn install --production

EXPOSE 9000

CMD ["npm", "run", "start:prod"]
