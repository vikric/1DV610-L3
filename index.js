import {Validator} from 'validator-sv'
const validator = new Validator()

const correctFormatNumber = validator.validatePhoneNumber('070 123 45 78')
console.log(correctFormatNumber)

console.log(validator.validatePassword('KALLE123ab'))
/* import { Validator } from 'validator-sv'
const validator = new Validator()

const correctFormatNumber = validator.validatePhoneNumber('070 123 45 78')
console.log(correctFormatNumber)
 */