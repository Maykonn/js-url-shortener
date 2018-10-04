class StringHelper {

  /**
   * Generating a number as hash of a string
   *
   * @param str
   * @return {number}
   * @see https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript/33647870#33647870
   */
  static hashCode(str) {
    let hash = 0, i = 0, len = str.length;
    while (i < len) {
      hash = ((hash << 5) - hash + str.charCodeAt(i++)) << 0;
    }
    return hash >>> 0;
  }

}

module.exports = StringHelper;
