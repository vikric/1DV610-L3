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

  /**
   *
   * @param eventName
   * @param methodName
   */
  createCustomListener (eventName, methodName) {
    document.addEventListener(eventName, (event) => {
      console.log(event.detail.fieldID)
      methodName()
    })
  }

  /**
   *
   * @param eventName
   * @param root0
   * @param root0.value
   * @param value
   */
  createCustomEvent (eventName, { value }) {
    console.log(value)
    const event = new CustomEvent(eventName, {

      detail: {
        value
      }
    })
    document.dispatchEvent(event)
  }
}
