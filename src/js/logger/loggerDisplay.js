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
  constructor (logInstance, displayElement) {
    if (!logInstance || !displayElement) {
      throw new Error('Missing argument')
    }
    this.#logInstance = logInstance
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
}
