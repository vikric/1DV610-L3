/**
 *
 */
export class ErrorHandler extends Error {
  /**
   * Creates an instance of ErrorHandler for missing arguments.
   *
   * @param {string} argName - The name of the missing argument.
   */
  constructor (argName) {
    super(`Missing argument: ${argName}`)
    this.name = 'MissingArgumentError'
  }
}
