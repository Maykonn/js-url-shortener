const URL = require('url').URL;

/**
 * LongUrl object
 */
class LongUrl {

  constructor() {
    /**
     * @type {URL}
     * @private
     */
    this._value = undefined;
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

module.exports = LongUrl;
