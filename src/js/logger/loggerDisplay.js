import { Logger } from './logger'

// 1 instance of logger instead of 1 for each inputfield.

/**
 *
 */
export class LoggerDisplay {
  #logInstance
  #displayElement

  /**
   *
   * @param logInstance
   * @param displayElement
   */
  constructor (displayElement) {
    if (!displayElement) {
      throw new Error('Missing arguement')
    }
    this.#logInstance = new Logger()
    this.#displayElement = displayElement
    this.startListener()
  }

  /**
   *
   */
  startListener () {
    document.addEventListener('counterUpdated', (event) => {
      this.updateDisplay(event.detail.counter)
    })
  }

  /**
   *
   * @param count
   */
  updateDisplay (count) {
    this.#displayElement.textContent = count
  }

  /**
   *
   */
  resetCounter () {
    return this.#logInstance.resetCounter()
  }

  /**
   *
   */
  getCounter () {
    return this.#logInstance.getCounter()
  }
}
