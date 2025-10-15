/**
 *
 */
export class Animation {
  startColor

  /**
   * @private
   * @type {{ valid: string, invalid: string }}
   */
  #color = {
    valid: 'lightgreen',
    invalid: '#e09b9b'
  }

  /**
   * Returns the valid color string.
   *
   * @returns {string} The valid color string.
   */
  getValidBackGroundColor () {
    return this.#color.valid
  }

  /**
   * Returns the invalid color string.
   *
   * @returns {string} The invalid color string.
   */
  getInvalidBackGroundColor () {
    return this.#color.invalid
  }

  /**
   * Gets the current color scheme configuration.
   *
   * @returns {object} The color configuration object with valid and invalid properties.
   */
  getColor () {
    return this.#color
  }

  /**
   * Sets the color scheme for valid and invalid states.
   *
   * @param {{valid: string, invalid: string}} colors - The color configuration
   */
  setColor ({ valid, invalid }) {
    this.#color.valid = valid
    this.#color.invalid = invalid
  }
}
