import { InputField } from './inputField'
import { loggerInstance } from './logger/loggerInstance'
import { LoggerDisplay } from './logger/loggerDisplay'

const logger = document.querySelector('.logger')

const personalNumber = new InputField('PersonalNumber')
const date = new InputField('Date')
const phoneNumber = new InputField('PhoneNumber')
const email = new InputField('Email')
const password = new InputField('Password')

personalNumber.getInputField()
date.getInputField()
phoneNumber.getInputField()
email.getInputField()
password.getInputField()
const log = new LoggerDisplay(loggerInstance, logger)
