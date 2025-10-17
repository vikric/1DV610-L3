import { InputField } from './inputField'
import { LoggerDisplay } from './logger/loggerDisplay'

/**
 * Start the application by creating input fields and a logger, then initializing them.
 */
export function startApp () {
  try {
    const logger = document.querySelector('.logger')

    const personalNumber = new InputField('PersonalNumber')
    const date = new InputField('Date')
    const phoneNumber = new InputField('PhoneNumber')
    const email = new InputField('Email')
    const password = new InputField('Password')
    const log = new LoggerDisplay(logger)

    const inputFields = [personalNumber, date, phoneNumber, email, password, log]
    for (const entry of inputFields) {
      entry.initialize()
    }

  /* const test = new InputField('test') */
  } catch (error) {
    console.log(error.message)
  }
}
