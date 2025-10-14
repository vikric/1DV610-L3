import { InputField } from './inputField'

/* const logger = document.querySelector('.logger').textContent
console.log(logger) */
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
