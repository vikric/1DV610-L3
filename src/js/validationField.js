import { Validator } from 'validator-sv'
const validator = new Validator()
/**
 *
 */
export class ValidationField {
  /**
   *
   * @param inputID
   */
  replaceFieldValue (inputID) {
    if (!inputID) {
      return
    }
    document.querySelector('#' + inputID).addEventListener('input', (input) => {
      input.target.value = input.target.value.replace(/[^-0-9]/g, '')
    })
  }

  /**
   *
   * @param inputID
   */
  showDateV2 (inputID) {
    if (!inputID) {
      return
    }
    document.querySelector('#' + inputID).addEventListener('input', (input) => {
      console.log(input)
      /* input.target.value = input.target.value.replace(/[^-0-9]/g, '') */
    })
  }
}
