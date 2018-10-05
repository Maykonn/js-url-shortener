const Configuration = require('./Configuration.js');
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
   * @param {Configuration} Configuration
   */
  constructor(longUrl, Configuration) {
    this._validateLongUrl(longUrl);

    /**
     * @type {URL}
     * @private
     */
    this._LongUrl = longUrl;

    /**
     * @type {Configuration}
     * @private
     */
    this._Configuration = Configuration;
  }

  /**
   * Creates a shortened str based on url and an identifier
   *
   * @return {{id: number, hash: string}}
   */
  shorten() {
    let result = this._createHash(this._LongUrl.href);

    if (this._needsPad(result.hash)) {
      /*const padLength = this._Configuration.getShortenMinLength() - result.hash.length;
      for (let i = 0; i < padLength; i++) {
        result.hash += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET_LENGTH));
      }*/
    }

    return result;
  }

  /**
   * Create a ShortenedStringHash object
   *
   * @param {string} str
   * @return {{id: number, hash: string}}
   * @private
   */
  _createHash(str) {
    let result = {id: 0, hash: ''};

    result.hash = this._numberToHashString(
      result.id = this._strToHashNumber(str)
    );

    return result;
  }

  /**
   * Hash a number as a random string
   *
   * @param {Number} number
   * @return {string}
   * @private
   */
  _numberToHashString(number) {
    let hash = '';

    while (number > 0) {
      hash += ALPHABET.charAt(number % ALPHABET_LENGTH);
      number = Math.floor(number / ALPHABET_LENGTH);
    }

    return hash;
  }

  /**
   * Retrieves a hash number to a given string
   *
   * @param str
   * @return {number}
   * @private
   */
  _strToHashNumber(str) {
    return StringHelper.hashCode(
      crypto.createHash('sha512').update(str).digest('hex')
    );
  }

  /**
   * Verify if str needs a pad to fit the configuration requirements
   *
   * @param {string} str
   * @return {boolean}
   * @private
   */
  _needsPad(str) {
    return str.length < this._Configuration.getShortenMinLength();
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
