FROM node:hydrogen

ARG UID
ARG GID

RUN apt-get update && apt-get install -y \
  net-tools \
  iputils-ping

WORKDIR /var/www/html
COPY package*.json /var/www/html
RUN cd /var/www/html npm install

RUN chmod -R 777 /var/www/html
COPY . .

RUN chown ${UID}:${GID} /var

# RUN addgroup --system --gid ${UID} nodejs
# RUN adduser --system --uid ${GID} nextjs

EXPOSE 3000

USER node

CMD [ "npm", "run", "dev"  ]