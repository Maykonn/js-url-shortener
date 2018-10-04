const URL = require('url').URL;

/**
 * ShortUrl object
 */
class ShortUrl {

  constructor() {
    /**
     * @type {number}
     * @private
     */
    this._id = undefined;

    /**
     * @type {URL}
     * @private
     */
    this._value = undefined;
  }

  /**
   * @return {number}
   */
  get id() {
    return this._id;
  }

  /**
   * @param {number} number
   */
  set id(number) {
    this._id = number
  }

  /**
   * @return {URL}
   */
  get value() {
    return this._value;
  }

  /**
   * @param {URL} url
   */
  set value(url) {
    this._value = url;
  }

}

module.exports = ShortUrl;
