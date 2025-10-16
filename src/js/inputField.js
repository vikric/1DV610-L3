import { Validation } from './validation.js'
import { AnimationController } from './animation/animationController.js'
import { DOMHandler } from './domHandler.js'
import { ErrorHandler } from './errorHandler.js'

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
      throw new ErrorHandler('InputID')
    }
    this.#inputID = inputID
    this.#validation = new Validation()
    this.domHandler = new DOMHandler()

    this.getStartColor()
    this.#startListenerEvent()
  }

  /**
   * Initializes the input listener for the input field.
   */
  #startListenerEvent () {
    this.domHandler.createListener(this.#inputID, (event) => {
      this.#validateField(event)
    })
  }

  /**
   * Gets the initial color from the field.
   */
  getStartColor () {
    const element = this.domHandler.returnHTMLElement(this.#inputID)
    this.#startColor = getComputedStyle(element).backgroundColor
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
   *
   * @returns {*} The result of the animation controller's background color activation.
   */
  #updateUI () {
    const field = this.#getInputField()
    if (this.#valid) {
      return this.#animationController.activateValidBackgroundColor(field)
    }
    return this.#animationController.activateInvalidBackgroundColor(field)
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
  #getInputField () {
    return document.querySelector('#' + this.#inputID)
  }
}
