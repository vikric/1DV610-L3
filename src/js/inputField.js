import { Animation } from './animation.js'
import { Validation } from './validation.js'

/**
 *
 */
export class InputField {
  #animation
  #valid
  #validation
  #inputID
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
    this.#inputID = inputID

    this.startListener()
  }

  /**
   *
   */
  startListener () {
    document.querySelector('#' + this.#inputID).addEventListener('input', (input) => {
      this.validateField(input)
    })
  }

  /**
   *
   * @param input
   */
  validateField (input) {
    this.#valid = this.#validation.isValid(input).valid

    this.updateUI()
    if (this.#valid) {
      this.sendUpdateEvent()
    }
  }

  /**
   *
   */
  updateUI () {
    const field = this.getInputField()
    field.style.background = this.#animation.changeBackGroundColor(this.#valid)
  }

  /**
   *
   */
  getInputField () {
    return document.querySelector('#' + this.#inputID)
  }

  /**
   *
   */
  sendUpdateEvent () {
    const event = new CustomEvent('validField', {

      detail: {
        fieldID: this.#inputID,
        isValid: this.#valid
      }
    })
    document.dispatchEvent(event)
  }
}
