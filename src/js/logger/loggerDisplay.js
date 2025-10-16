import { Logger } from './logger'
import { DOMHandler } from '../domHandler'

// 1 instance of logger instead of 1 for each inputfield.

/**
 *
 */
export class LoggerDisplay {
  #logInstance
  #displayElement

  /**
   * Creates an instance of LoggerDisplay and initializes the display element.
   *
   * @param {HTMLElement} displayElement - The HTML element where the counter will be displayed.
   */
  constructor (displayElement) {
    if (!displayElement) {
      throw new Error('Missing arguement')
    }
    this.#logInstance = new Logger()
    this.domHandler = new DOMHandler()
    this.#displayElement = displayElement
  }

  /**
   *
   */
  initialize () {
    this.#logInstance.initialize()
    this.listenCounterUpdatedEvent()
  }

  sendCounterUpdatedEvent
  /**
   * Starts listening for 'counterUpdated' events and updates the display when triggered.
   */
  listenCounterUpdatedEvent () {
    document.addEventListener('counterUpdated', (event) => {
      this.updateDisplay(event.detail.counter)
    })
  }

  /**
   * Updates the display element with the current counter value.
   *
   * @param {number} count - The current value of the counter to display.
   */
  updateDisplay (count) {
    this.#displayElement.textContent = count
  }

  /**
   * Resets the counter in the Logger instance.
   *
   * @returns {number} The value of the counter after reset.
   */
  resetCounter () {
    return this.#logInstance.resetCounter()
  }

  /**
   * Gets the current value of the counter from the Logger instance.
   *
   * @returns {number} The current value of the counter.
   */
  getCounter () {
    return this.#logInstance.getCounter()
  }
}
