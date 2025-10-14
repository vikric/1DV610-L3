import { Validation } from './validation.js'
import { AnimationController } from './animation/animationController.js'
import { DOMListener } from './domListener.js'

/**
 *
 */
export class InputField {
  #valid
  #validation
  #inputID
  #startColor
  #animationController
  /**
   * Represents an input field with validation.
   *
   * @param {string} inputID - The ID of the input field.
   */
  constructor (inputID) {
    if (!inputID) {
      throw new TypeError('Missing ID')
    }
    this.#inputID = inputID
    this.#validation = new Validation()
    this.domListener = new DOMListener()

    this.getStartColor()
    this.#startListenerEvent()
  }

  /**
   * Initializes the input listener for the input field.
   */
  #startListenerEvent () {
    this.domListener.createListener(this.#inputID, (event) => {
      this.#validateField(event)
    })
  }

  /**
   *
   */
  getStartColor () {
    this.#startColor = getComputedStyle(document.querySelector('#' + this.#inputID)).backgroundColor
    this.#animationController = new AnimationController(this.#startColor)
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
    this.#animationController.activateBackgroundColor(field, this.#valid)
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
