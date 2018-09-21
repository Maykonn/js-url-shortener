const URL = require('url').URL;
const URLValidationRegex = require('../src/URLValidationRegex.js');

class Shortener {

  constructor() {
    /**
     * @type {URL}
     * @private
     */
    this._longUrl = null;

    /**
     * @type {URL}
     * @private
     */
    this._shortUrl = null;
  }

  /**
   * The original URL parsed
   * @returns {URL}
   */
  getLongUrl() {
    return this._longUrl;
  }

  /**
   * The shortened URL parsed
   * @returns {URL}
   */
  getShortUrl() {
    return this._shortUrl;
  }

  /**
   * Shorten a long URL string
   * @param longUrl
   * @returns {boolean}
   */
  shorten(longUrl) {
    if (!this._validateUrl(longUrl)) {
      throw new Error('Invalid URL, given: ' + longUrl);
    }

    this._longUrl = new URL(longUrl);
    this._shortUrl = new URL(longUrl.toUpperCase());

    return true;
  }

  _validateUrl(url) {
    // TODO: move to a specific validation object
    // TODO: verify the possibility to validate if url is not a shortened url
    if (typeof url !== 'string') {
      throw new Error('(string) URL is required');
    }
    return url.match(URLValidationRegex);
  }

}

module.exports = Shortener;
