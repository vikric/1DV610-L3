import { Validator } from 'validator-sv'
const validator = new Validator()
/**
 *
 */
export class Validation {
  /**
   * Validates the input value using the appropriate validator method.
   *
   * @param {Event} input - The input event containing the target element with name and value properties.
   * @returns {boolean} True if the input value is valid, false otherwise.
   */
  isValid (input) {
    const methodName = 'validate' + input.target.name
    return validator[methodName](input.target.value)
  }
}
