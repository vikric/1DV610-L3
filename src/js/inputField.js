import { Animation } from './animation'
import { Validation } from './validation'
/**
 *
 */
export class InputField {
  #animation
  #valid

  #validation
  /**
   *
   * @param inputID
   */
  constructor (inputID) {
    if (!inputID) {
      throw new TypeError('Missing ID')
    }
    this.#animation = new Animation()
    this.#validation = new Validation()
    this.inputID = inputID
    document.querySelector('#' + inputID).addEventListener('input', (input) => {
      this.validateField(input)
    })
  }

  /**
   *
   */
  getInputField () {
    return document.querySelector('#' + this.inputID)
  }

  /**
   *
   */
  updateUI () {
    this.getInputField().style.background = this.#animation.changeBackGroundColor(this.#valid)
  }

  /**
   *
   * @param input
   */
  validateField (input) {
    this.#valid = this.#validation.isValid(input).valid
    this.updateUI()
  }
}
