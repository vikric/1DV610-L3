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
  #startColor
  /**
   * Represents an input field with validation.
   *
   * @param {string} inputID - The ID of the input field.
   */
  constructor (inputID) {
    if (!inputID) {
      throw new TypeError('Missing ID')
    }

    this.#animation = new Animation()
    this.#validation = new Validation()
    this.#inputID = inputID

    this.#startListenerEvent()
  }

  /**
   * Initializes the input listener for the input field.
   */
  #startListenerEvent () {
    this.getStartColor()
    document.querySelector('#' + this.#inputID).addEventListener('input', (input) => {
      this.#validateField(input)
    })
  }

  /**
   *
   */
  getStartColor () {
    // https://stackoverflow.com/questions/1887104/how-to-get-the-background-color-of-an-html-element
    this.#startColor = getComputedStyle(document.querySelector('#' + this.#inputID)).backgroundColor
  }

  /**
   * Validates the input field based on the provided input.
   *
   * @param {Event} input - The input event from the input field.
   */
  #validateField (input) {
    this.#valid = this.#validation.isValid(input).valid

    this.#updateUI()
    if (this.#valid) {
      this.#sendValidFieldEvent()
    }
  }

  /**
   * Updates the user interface based on the validation state.
   */
  #updateUI () {
    const field = this.getInputField()
    field.style.backgroundColor = field.value.length === 0
      ? this.#startColor
      : field.style.background = this.#animation.changeBackGroundColor(this.#valid)
  }

  /**
   * Dispatches a custom event when the input field is valid.
   */
  #sendValidFieldEvent () {
    const event = new CustomEvent('validField', {

      detail: {
        fieldID: this.#inputID,
        isValid: this.#valid
      }
    })
    document.dispatchEvent(event)
  }

  /**
   * Retrieves the input field element based on the input ID.
   *
   * @returns {Element} The input field element.
   */
  getInputField () {
    return document.querySelector('#' + this.#inputID)
  }
}
