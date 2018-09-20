const URLValidationRegex = require('../src/URLValidationRegex.js');

class UrlShortener {

  constructor(longUrl) {
    if (!this._validateUrl(longUrl)) {
      throw new Error('Invalid url, given: ' + longUrl);
    }

    this._longUrl = longUrl;
    this._shortUrl = '';
  }

  getLongUrl() {
    return this._longUrl;
  }

  getShortUrl() {
    return this._shortUrl;
  }

  shorten() {
    // TODO: implements
    return this._shortUrl = this._longUrl.toUpperCase();
  }

  _validateUrl(url) {
    return url.match(URLValidationRegex);
  }

}

module.exports = (longUrl) => {
  return new UrlShortener(longUrl);
};
