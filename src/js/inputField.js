import { Validation } from './validation.js'
import { AnimationController } from './animation/animationController.js'
import { DOMHandler } from './middleware/domHandler.js'
import { ErrorHandler } from './middleware/errorHandler.js'

/**
 *
 */
export class InputField {
  #valid
  #validation
  #inputID
  #startColor
  #animationController
  #domHandler
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
    this.#domHandler = new DOMHandler()
  }

  /**
   * Initializes the input field by setting its start color and adding event listeners.
   */
  initialize () {
    this.getStartColor()
    this.#createValidateFieldListener()
  }

  /**
   * Gets the initial color from the field.
   */
  getStartColor () {
    const element = this.#domHandler.returnHTMLElement(this.#inputID)
    this.#startColor = getComputedStyle(element).backgroundColor
    this.#animationController = new AnimationController(this.#startColor)
  }

  /**
   * Initializes the input listener for the input field.
   */
  #createValidateFieldListener () {
    this.#domHandler.createInputEventListener(this.#inputID, (event) => {
      this.#validateField(event)
    })
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
   * Retrieves the input field element based on the input ID.
   *
   * @returns {Element} The input field element.
   */
  #getInputField () {
    return document.querySelector('#' + this.#inputID)
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
}
