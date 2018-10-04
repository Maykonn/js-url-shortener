const URL = require('url').URL;
const StringHelper = require('./helper/StringHelper.js');
const crypto = require('crypto');
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
const ALPHABET_LENGTH = ALPHABET.length;

class Shortener {

  /**
   * Shortener
   *
   * @param {URL} longUrl
   */
  constructor(longUrl) {
    this._validateLongUrl(longUrl);

    /**
     * @type {URL}
     * @private
     */
    this._LongUrl = longUrl;
  }

  /**
   * Creates a shortened str based on url and an identifier
   *
   * @return {{id: number, shortenedStr: string}}
   */
  shorten() {
    let result = {id: 0, shortenedStr: ''};
    let longUrlHash = crypto.createHash('sha512').update(this._LongUrl.href).digest('hex');
    let number = result.id = StringHelper.hashCode(longUrlHash);

    while (number > 0) {
      result.shortenedStr += ALPHABET.charAt(number % ALPHABET_LENGTH);
      number = Math.floor(number / ALPHABET_LENGTH);
    }

    if(result.shortenedStr.length < this) {

    }

    return result;
  }

  /**
   * Verify if the longUrl param is instanceof URL
   *
   * @param longUrl
   * @return {boolean}
   * @private
   */
  _validateLongUrl(longUrl) {
    if (!(longUrl instanceof URL)) {
      throw new Error('The longUrl param must be a URL instance');
    }

    return true;
  }

}

module.exports = Shortener;
