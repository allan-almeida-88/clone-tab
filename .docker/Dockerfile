FROM node:hydrogen

RUN apt-get update && apt-get install -y \
  net-tools \
  iputils-ping

WORKDIR /var/www/html
COPY package*.json /var/www/html
RUN cd /var/www/html npm install

RUN chmod -R 777 /var/www/html
COPY . .
EXPOSE 3000

CMD [ "npm", "run", "dev"  ]