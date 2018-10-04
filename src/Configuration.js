const URL = require('url').URL;
const URLValidator = require('./url/Validator.js');

class Configuration {

  /**
   * The URL Shortener Configuration
   */
  constructor() {
    /**
     * @type {URL}
     * @private
     */
    this._serviceUrl = undefined;

    /**
     * @type {number}
     * @private
     */
    this._shortenMinLength = 7;
  }

  /**
   * Retrieves the Service URL (your url shortener service or api, etc)
   *
   * @return {URL}
   */
  getServiceUrl() {
    return this._serviceUrl;
  }

  /**
   * Retrieves the min length configured to calculate the shorten part of url
   *
   * @return {number}
   */
  getShortenMinLength() {
    return this._shortenMinLength;
  }

  /**
   * Configures the service URL (your url shortener service or api, etc)
   *
   * @param serviceUrl
   */
  setServiceUrl(serviceUrl) {
    this._serviceUrl = this._generateServiceUrl(serviceUrl);
  }

  /**
   * Configures the min length to calculate the shorten part of url
   *
   * @param minLength
   */
  setShortenMinLength(minLength) {
    this._shortenMinLength = minLength;
  }

  /**
   * If valid, generates the service URL
   *
   * @param serviceUrl
   * @private
   */
  _generateServiceUrl(serviceUrl) {
    const URLValidation = new URLValidator(serviceUrl);

    if (!URLValidation.isValid()) {
      throw new Error(URLValidation.getErrors().toString());
    }

    return new URL(serviceUrl);
  }

}

module.exports = Configuration;
