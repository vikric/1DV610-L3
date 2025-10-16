import { InputField } from './inputField'
import { LoggerDisplay } from './logger/loggerDisplay'

/**
 *
 */
export function startApp () {
  try {
    const logger = document.querySelector('.logger')

    const personalNumber = new InputField('PersonalNumber')
    const date = new InputField('Date')
    const phoneNumber = new InputField('PhoneNumber')
    phoneNumber.Initialize()
    const email = new InputField('Email')
    const password = new InputField('Password')
    const log = new LoggerDisplay(logger)
    log.initialize()

  /* const test = new InputField('test') */
  } catch (error) {
    console.log(error.message)
  }
}
