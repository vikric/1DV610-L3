import { Validator } from 'validator-sv'
import { ValidationField } from './validationField'
const validator = new Validator()
const field = new ValidationField()

const correctFormatNumber = validator.validatePhoneNumber('070 123 45 78')
console.log(correctFormatNumber)

const incorrectFormatNumber = validator.validatePhoneNumber('70 123 45 78')
console.log(incorrectFormatNumber)

const date = new Date()
console.log(date)
const year = (date.getFullYear())

const month = date.getMonth() + 1
const day = (date.getDate())
document.querySelector('#Date').value = year + ':' + month + ':' + day
document.querySelector('#Date').addEventListener('input', (input) => {
  console.log(input.target.value)
})
