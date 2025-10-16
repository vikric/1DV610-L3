/**
 * Creates a new Logger instance and starts the event listener.
 */
export class Logger {
  #counter = 0

  /**
   * Initializes the input field by setting its start color and adding event listeners.
   */
  initialize () {
    this.startListener()
  }

  /**
   *
   */
  startListener () {
    document.addEventListener('validField', (e) => {
      console.log(e.detail)
      this.updateCounter()
    })
  }

  /**
   *
   */
  updateCounter () {
    ++this.#counter
    this.sendCounterUpdatedEvent()
  }

  /**
   *
   */
  sendCounterUpdatedEvent () {
    const event = new CustomEvent('counterUpdated', {

      detail: {
        counter: this.#counter
      }
    })
    document.dispatchEvent(event)
  }

  /**
   *
   */
  resetCounter () {
    this.#counter = 0
  }

  /**
   *
   */
  getCounter () {
    return this.#counter
  }
}
