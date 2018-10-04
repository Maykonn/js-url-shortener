const Configuration = require('./src/Configuration.js');
const URL = require('url').URL;
const URLValidator = require('./src/url/Validator.js');
const Shortener = require('./src/Shortener.js');
const ShortUrl = require('./src/url/ShortUrl.js');

class UrlShortener {

  /**
   * @param {Configuration} Configuration
   */
  constructor(Configuration) {
    /**
     * @type {Configuration}
     * @private
     */
    this._Configuration = Configuration;

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
     * @type {ShortUrl}
     * @private
     */
    this._ShortUrl = null;

    /**
     * @type {URLValidator}
     * @private
     */
    this._Validator = null;
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
   *
   * @returns {URL}
   */
  getLongUrl() {
    return this._LongUrl;
  }

  /**
   * The shortened URL parsed
   *
   * @returns {URL}
   */
  getShortUrl() {
    return this._ShortUrl;
  }

  /**
   * The URL Validation object
   *
   * @returns {URLValidator}
   */
  getValidator() {
    return this._Validator;
  }

  /**
   * Shorten a long url
   *
   * @param {string} longUrl
   * @returns {boolean}
   */
  shorten(longUrl) {
    this._OriginalUrl = (longUrl || undefined);
    this._Validator = new URLValidator(this._OriginalUrl);

    if (this._Validator.isValid()) {
      this._LongUrl = new URL(this._OriginalUrl);

      const Shortened = (new Shortener(this._LongUrl)).shorten();

      this._ShortUrl = new ShortUrl();
      this._ShortUrl.id = Shortened.id;
      this._ShortUrl.value = new URL(this._Configuration.getServiceUrl().origin + '/' + Shortened.shortenedStr);

      return true;
    }

    return false;
  }

}

module.exports = {
  Configuration: Configuration,
  UrlShortener: UrlShortener
};
