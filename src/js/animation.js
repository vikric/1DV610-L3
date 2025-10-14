/**
 *
 */
export class Animation {
  /**
   * @private
   * @type {{ valid: string, invalid: string }}
   */
  #color = {
    valid: 'lightgreen',
    invalid: '#e09b9b'
  }

  /**
   * Returns the appropriate background color based on validation state.
   *
   * @param {boolean} valid - Whether the state is valid or invalid.
   * @returns {string} The color string for the given validation state.
   */
  changeBackGroundColor (valid) {
    return valid ? this.#color.valid : this.#color.invalid
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
