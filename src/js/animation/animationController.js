import { Animation } from './animation'

/**
 *
 */
export class AnimationController {
  #animation
  #startColor
  /**
   * Controls the animation controller and provides background color behavior for fields.
   *
   * @param {string} startColor - Initial background color to use when a field is empty.
   */
  constructor (startColor) {
    this.#animation = new Animation()
    this.#startColor = startColor
  }

  /**
   * Apply the appropriate background color to a form field based on its validation state.
   *
   * @param {HTMLInputElement} field - The field element whose background should be updated.
   * @param {'valid'|'invalid'} state - The validation state determining which background color to apply.
   */
  #applyColor (field, state) {
    if (field.value.length === 0) {
      field.style.backgroundColor = this.#startColor
      return
    }

    const colors = {
      valid: this.#animation.getValidBackGroundColor(),
      invalid: this.#animation.getInvalidBackGroundColor()
    }

    field.style.background = colors[state]
  }

  /**
   * Apply the valid background color to the provided form field.
   *
   * @param {HTMLInputElement} field - The field element whose background should be updated.
   */
  activateValidBackgroundColor (field) {
    this.#applyColor(field, 'valid')
  }

  /**
   * Apply the invalid background color to the provided form field.
   *
   * @param {HTMLInputElement} field - The field element whose background should be updated.
   */
  activateInvalidBackgroundColor (field) {
    this.#applyColor(field, 'invalid')
  }
}
