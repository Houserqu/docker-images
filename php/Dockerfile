FROM php:5.6-fpm-alpine

RUN apk add --no-cache \
        freetype \
        libpng \
        libjpeg-turbo \
        freetype-dev \
        libpng-dev \
        libjpeg-turbo-dev \
    && docker-php-ext-configure gd \
       --with-gd --with-jpeg-dir --with-png-dir --with-freetype-dir \
    && docker-php-ext-install mysqli pdo pdo_mysql gd