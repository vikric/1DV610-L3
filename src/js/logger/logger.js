import { DOMListener } from '../domListener'
/**
 *
 */
export class Logger {
  #counter = 0

  /**
   *
   */
  constructor () {
    this.domListener = new DOMListener()
    this.startListener()
  }

  /**
   *
   */
  startListener () {
    this.domListener.createCustomListener('validField', this.updateCounter.bind(this))
    /*     document.addEventListener('validField', (e) => {
      console.log(e.detail.fieldID)
      this.updateCounter()
    }) */
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
    this.domListener.createCustomEvent('counterUpdated', { value: this.#counter })
    /*     const event = new CustomEvent('counterUpdated', {

      detail: {
        counter: this.#counter
      }
    })
    document.dispatchEvent(event) */
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
