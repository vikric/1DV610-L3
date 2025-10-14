/**
 *
 */
export class Logger {
  #counter = 0

  /**
   *
   */
  updateCounter () {
    console.log(++this.#counter)
  }

  /**
   *
   */
  resetCounter () {
    this.#counter = 0
    console.log(this.#counter)
  }

  /**
   *
   */
  getCounter () {
    return this.#counter
  }
}
