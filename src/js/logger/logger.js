/**
 *
 */
export class Logger {
  #counter = 0

  /**
   *
   */
  constructor () {
    this.startListener()
  }

  /**
   *
   */
  startListener () {
    document.addEventListener('validField', (e) => {
      console.log(e.detail.fieldID)
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
