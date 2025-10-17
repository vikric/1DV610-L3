import { DOMHandler } from '../middleware/domHandler'
/**
 * Creates a new Logger instance and starts the event listener.
 */
export class Logger {
  #counter = 0

  /**
   * Constructs the Logger and initializes the DOMHandler.
   */
  constructor () {
    this.domHandler = new DOMHandler()
  }

  /**
   * Initializes the input field by adding event listener.
   */
  initialize () {
    this.#validFieldListener()
  }

  /**
   * Adds an event listener that triggers when a field is validated.
   */
  #validFieldListener () {
    this.domHandler.createEventListener('validField', this.#updateCounter.bind(this))
  }

  /**
   * Updates the counter and sends an event with the new counter value.
   */
  #updateCounter () {
    ++this.#counter
    this.#sendCounterUpdatedEvent()
  }

  /**
   * Creates an event and sends counter value.
   */
  #sendCounterUpdatedEvent () {
    const event = new CustomEvent('counterUpdated', {

      detail: {
        counter: this.#counter
      }
    })
    document.dispatchEvent(event)
  }

  /**
   * Resets the counter.
   */
  resetCounter () {
    this.#counter = 0
  }

  /**
   * Returns the counter.
   *
   * @returns {number} The current counter value.
   */
  getCounter () {
    return this.#counter
  }
}
