const URL = require('url').URL;
const URLValidator = require('./url/Validator.js');

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
     *
     * @type {Validator}
     * @private
     */
    this._UrlValidator = null;
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
      this._ShortUrl = new URL(this._OriginalUrl.toUpperCase());
      return true;
    }

    return false;
  }

}

module.exports = Shortener;
