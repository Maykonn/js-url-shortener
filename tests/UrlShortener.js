"use strict";

const longUrl = 'https://www.youtube.com/c/JogandoMuitoOficial?sub_confirmation=1'; // Yeah, I'm a youtuber too :)
const UrlShortener = require('../src/UrlShortener.js')(longUrl);

UrlShortener.shorten();
console.log('Long URL:', UrlShortener.getLongUrl());
console.log('Short URL:', UrlShortener.getShortUrl());
