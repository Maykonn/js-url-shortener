const Configuration = require('./src/Configuration.js');
const URL = require('url').URL;
const URLValidator = require('./src/url/Validator.js');
const Shorten = require('./src/Shortener.js');

class Shortener {

  constructor() {
    /**
     * @type {string}
     * @private
     */
    this._OriginalUrl = '';

    /**
     * @type {URL}
     * @private
     */
    this._LongUrl = null;

    /**
     * @type {URL}
     * @private
     */
    this._ShortUrl = null;

    /**
     * @type {Validator}
     * @private
     */
    this._UrlValidator = null;

    /**
     * URL hash algorithm
     * @type {string}
     * @private
     */
    this._URL_HASH_ALGORITHM = 'sha512';
  }

  /**
   * The original URL as given string
   * @returns {string}
   */
  getOriginalUrl() {
    return this._OriginalUrl;
  }

  /**
   * The original URL parsed
   * @returns {URL}
   */
  getLongUrl() {
    return this._LongUrl;
  }

  /**
   * The shortened URL parsed
   * @returns {URL}
   */
  getShortUrl() {
    return this._ShortUrl;
  }

  /**
   * The URL Validation object
   * @returns {Validator}
   */
  getValidator() {
    return this._UrlValidator;
  }

  /**
   * Shorten a long URL string
   * @param longUrl
   * @returns {boolean}
   */
  shorten(longUrl) {
    this._OriginalUrl = (longUrl || undefined);
    this._UrlValidator = new URLValidator(this._OriginalUrl);

    if (this._UrlValidator.isValid()) {
      this._LongUrl = new URL(this._OriginalUrl);
      this._ShortUrl = new Shorten(this._LongUrl);


      // Verify if hash already exists on redis, if exists return the value
      // on redis the hash is: HSET hash:{this._OriginalUrlHash} "longUrl" "http://anything..." "short" "A7k5saB"
      // the short value of url is calculated based in a incremented number: INCRY currentId, returned value will
      // be a number that will be used to compute the short string using: https://github.com/delight-im/ShortURL/blob/master/JavaScript/ShortURL.js

      //this._ShortUrl = new URL(this._OriginalUrl.toUpperCase());
      return true;
    }

    return false;
  }

}

module.exports = {
  Configuration: Configuration,
  UrlShortener: Shortener
};
