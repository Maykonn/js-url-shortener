"use strict";

const Shortener = require('../UrlShortener.js');

const ServiceConfiguration = new Shortener.Configuration();
ServiceConfiguration.setServiceUrl('https://asd.io');
ServiceConfiguration.setShortenMinLength(8);

const URLShortener = new Shortener.UrlShortener(ServiceConfiguration);
URLShortener.shorten('https://github.com/Maykonn/js-url-shortener.git');

console.log('Original URL:', URLShortener.getOriginalUrl());
console.log('Long URL object:', URLShortener.getLongUrl());
console.log('Short URL object:', URLShortener.getShortUrl());
console.log('Errors:', URLShortener.getValidator().getErrors());
