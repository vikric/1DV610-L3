import { ErrorHandler } from './errorHandler'
/**
 *
 */
export class DOMHandler {
  /**
   * Creates an event listener for the specified input element and calls the provided method on input events.
   *
   * @param {string} inputID - The ID of the input element to attach the listener to.
   * @param {Function} callback - The callback function to execute when the input event is triggered.
   */
  createEventListener (inputID, callback) {
    if (!inputID) {
      throw new ErrorHandler('inputID')
    }
    if (!inputID) {
      throw new ErrorHandler('Callback')
    }
    document.querySelector('#' + inputID).addEventListener('input', (event) => {
      callback(event)
    })
  }

  /**
   * Returns the DOM element with the specified ID, or throws an error if not found.
   *
   * @param {string} elementID - The ID of the element to select.
   * @returns {Element} The DOM element with the given ID.
   */
  returnHTMLElement (elementID) {
    const element = document.querySelector('#' + elementID)
    if (!element) {
      throw new ErrorHandler('Element')
    }
    return element
  }
}
