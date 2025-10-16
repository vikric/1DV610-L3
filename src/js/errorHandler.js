/**
 *
 */
export class ErrorHandler extends Error {
  /**
   *
   * @param argName
   */
  constructor (argName) {
    super(`Missing argument: ${argName}`)
    this.name = 'MissingArgumentError'
  }
}
