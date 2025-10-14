/**
 *
 */
export class DOMListener {
  /**
   *
   * @param inputID
   * @param methodName
   */
  createListener (inputID, methodName) {
    document.querySelector('#' + inputID).addEventListener('input', (event) => {
      methodName(event)
    })
  }
}
