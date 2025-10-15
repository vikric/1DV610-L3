import { Animation } from './animation'

/**
 *
 */
export class AnimationController {
  #animation
  #startColor
  /**
   *
   * @param startColor
   */
  constructor (startColor) {
    this.#animation = new Animation()
    this.#startColor = startColor
  }

  /**
   *
   * @param field
   * @param state
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
   *
   * @param field
   */
  activateValidBackgroundColor (field) {
    this.#applyColor(field, 'valid')
  }

  /**
   *
   * @param field
   */
  activateInvalidBackgroundColor (field) {
    this.#applyColor(field, 'invalid')
  }
}
