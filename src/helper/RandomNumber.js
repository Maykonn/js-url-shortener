const JsRandomNumber = require('js-random-number');

class RandomNumber {

  /**
   * Generates a unique random number
   *
   * @return {number}
   */
  static generateNumber() {
    const Configuration = new JsRandomNumber.Configuration();
    Configuration.timestampBased();

    const RandomNumberTimestampBased = new JsRandomNumber.Generator(Configuration);
    return RandomNumberTimestampBased.getNumber().getValue();
  }

}

module.exports = RandomNumber;
