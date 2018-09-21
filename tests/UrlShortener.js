"use strict";

const Shortener = require('../src/Shortener.js');

// Yeah, I'm a youtuber too :)
const URLShortener = new Shortener();
URLShortener.shorten('https://www.youtube.com/c/JogandoMuitoOficial?sub_confirmation=1');

console.log('Long:', URLShortener.getLongUrl());
console.log('Short:', URLShortener.getShortUrl());
