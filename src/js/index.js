import { InputField } from './inputField'
import { LoggerDisplay } from './logger/loggerDisplay'

try {
  const logger = document.querySelector('.logger')

  const personalNumber = new InputField('PersonalNumber')
  const date = new InputField('Date')
  const phoneNumber = new InputField('PhoneNumber')
  const email = new InputField('Email')
  const password = new InputField('Password')
  const log = new LoggerDisplay(logger)
  log.resetCounter()

  const test = new InputField('test')
} catch (error) {
  console.log(error.message)
}
