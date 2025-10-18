# Validation Application

School project for Linnúniversity

## Description
An application for validating formats of multiple inputs using module validator-sv.

- Dates
- Emailaddresses
- Passwords
- Swedish phonenumbers
- Swedish personalnumbers  
---

## Project Structure

```
├── app.js                      # Application entry point
├── inputField.js               # InputField class
├── validation.js               # Validation logic via validator-sv
├── animation/
│     └── animationController.js  # Handles color animations
├── middleware/
│     ├── domHandler.js 
│     └── errorHandler.js 
└── logger/
      └── loggerDisplay.js
```

## How it works

1.  The following creates Inputfield instances for each Input.
```js
import { startApp } from './app.js'
startApp()
```
2. Each input have an eventlistener
3. Input is validated using validator-sv module.
4. Updates the color in realtime.
5. Logger counter updates every succesful search

## Development

If you are interested in adding more Inputfields, you can do it like this:

```js
const newField = new InputField('newFieldID')
newField.initialize()
```