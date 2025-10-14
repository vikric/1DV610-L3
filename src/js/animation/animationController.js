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
   * @param valid
   */
  activateBackgroundColor (field, valid) {
    field.style.backgroundColor = field.value.length === 0
      ? this.#startColor
      : field.style.background = this.#animation.changeBackGroundColor(valid)
  }
}
