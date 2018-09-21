"use strict";

const Shortener = require('../src/Shortener.js');

const URLShortener = new Shortener();
URLShortener.shorten('https://github.com/Maykonn/node-js-url-shortener');

console.log('Original URL:', URLShortener.getOriginalUrl());
console.log('Long URL object:', URLShortener.getLongUrl());
console.log('Short URL object:', URLShortener.getShortUrl());
console.log('Errors:', URLShortener.getValidator().getErrors());
