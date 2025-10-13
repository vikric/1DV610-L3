import { Validator } from 'validator-sv'
const validator = new Validator()
/**
 *
 */
export class Validation {
  /**
   *
   * @param value
   * @param input
   */
  isValid (input) {
    const methodName = 'validate' + input.target.name
    return validator[methodName](input.target.value)
  }
}
