import { InputField } from './inputField'

const personalNumber = new InputField('PersonalNumber')
const date = new InputField('Date')
const phoneNumber = new InputField('PhoneNumber')
const email = new InputField('Email')

console.log(personalNumber.getInputField())
console.log(date.getInputField())
console.log(phoneNumber.getInputField())
console.log(email.getInputField())
