const URLValidationRegex = require('./ValidationRegex.js');

class Validator {

  /**
   * @param {string} url
   */
  constructor(url) {
    this._Errors = [];
    this._Url = url;
  }

  /**
   * An array of errors
   * @returns {Array}
   */
  getErrors() {
    return this._Errors;
  }

  /**
   * Given URL string
   * @returns {string}
   */
  getUrl() {
    return this._Url;
  }

  isValid() {
    if (!this._Url) {
      this._Errors.push('URL is required');
    }

    if (typeof this._Url !== 'string' || !this._Url.match(URLValidationRegex)) {
      this._Errors.push('Invalid URL');
    }

    // TODO: verify if url is not a shortened url

    return this._Errors.length === 0;
  }

}

module.exports = Validator;
