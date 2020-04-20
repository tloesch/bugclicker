FROM php:7.4-apache

RUN apt-get update && apt-get install unzip vim nano locate -y
RUN docker-php-ext-install opcache
RUN a2enmod rewrite

COPY ./.docker/docker-php.ini /usr/local/etc/php/conf.d/docker-php.ini
COPY ./.docker/bugclicker.conf /etc/apache2/sites-available/000-default.conf

RUN mkdir -p /app/var/log
RUN mkdir -p /app/var/temp && chown www-data:www-data /app/var/temp -R
RUN mkdir -p /app/var/session && chown www-data:www-data /app/var/session -R
RUN mkdir -p /app/data/savegames && chown www-data:www-data /app/data/savegames -R

COPY --chown=www-data:www-data ./app/src /app/src

RUN updatedb

WORKDIR /app

EXPOSE 80