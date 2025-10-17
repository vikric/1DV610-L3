# Reflection 
om hur just det kapitlet har påverkat eller inte påverkat din kod. Använd bokens termer. 
Ge exempel med läsbara screenshots från er kod till varje reflektion. Dokumentera detta till mig i ett separat dokument
 reflection.md där jag är mottagaren.

Fokusera på tydlighet, variation, ärlighet och vad som är intressant. Exempelvis om du har icke självklara överväganden med
 olika kvalitetsregler som står i konflikt med varandra så är dessa extra intressanta.

Jag kommer även titta på och bedöma er kod. Den skall därför i största mån vara skriven för att kunna fortsätta utvecklas av
 andra programmerare.

## Chapter 2 Meaningful Names
I have tried to create methods and variables with **Intention-Reavling Names** with this assignment. It makes the code easier
to follow which I find is especially important when doing object oriented programming.
It also reduces the use of comments since the names of the methods / variables already describes it self. 
Something I however have problem is that I name something when I get an idea how I want the method to work. After refactoring
the method or class does not work as I first intended but I often forget to change names. That is something I need to get 
better at.
This method used to be names changeBackgroundColor but changed it since it only returns 1 string.
```js

  /**
   * Returns the appropriate background color based on validation state.
   *
   * @param {boolean} valid - Whether the state is valid or invalid.
   * @returns {string} The color string for the given validation state.
   */
  getBackgroundColor (valid) {
    return valid ? this.#color.valid : this.#color.invalid
  }
```

## Chapter 3 Functions
**One Level of Abstraction per Function** is somethingthing I have worked with, especially with my logger 
and animation class.
Mostly when trying to make them **Small** and **Do One Thing**.
I refactored the method in Chapter 2 to not include **Flag arguments**. I find that they make programming so much easier but 
unfortunately it's hard to create **Meaningful Names** when using **Flag Arguments**


```js
    /**
   * Returns the valid color string.
   *
   * @returns {string} The valid color string.
   */
  getValidBackGroundColor () {
    return this.#color.valid
  }

  /**
   * Returns the invalid color string.
   *
   * @returns {string} The invalid color string.
   */
  getInvalidBackGroundColor () {
    return this.#color.invalid
  }
  
```

## Chapter 4 Comments
I do use JSDOC, which is **Mandated Comments** and I only use it because of eslint.
During L2 and L3 I do not find the use of comments since they methods are quite small and easy to understand. 
It feels as if you create clean code, comments are not needed as I dont need to **Explan Yourself in Code**.
However previous when using AI, I used comments because I would not understand 100% what they did
if I went back 2 week later.
Here is an very easy method where the comment doesn't really do anything.

```js
  /**
   * Sets the color scheme for valid and invalid states.
   *
   * @param {{valid: string, invalid: string}} colors - The color configuration
   */
  setColor ({ valid, invalid }) {
    this.#color.valid = valid
    this.#color.invalid = invalid
  }
```


## Chapter 5 Formatting

Since I've tried to more OOP, it results in more classes which in return make each class much shorter. So I have not had a problem with **Vertical Formatting**.  
I have all methods in the order they are called. **Dependent Functions**  
One of the reasons I use Eslint is because of **Identation**.  
I use 125 max characters per line to make it easier to read as described in **Horizonal 
Formatting**
Just this short method shows how much easier the first method is the read, all because you have indentions.
```js
  #updateUI () {
    const field = this.#getInputField()
    if (this.#valid) {
      return this.#animationController.activateValidBackgroundColor(field)
    }
    return this.#animationController.activateInvalidBackgroundColor(field)
  }

    #updateUI () {
    const field = this.#getInputField()
    if (this.#valid) {
    return this.#animationController.activateValidBackgroundColor(field)
    }
    return this.#animationController.activateInvalidBackgroundColor(field)
  }
```

## Chapter 6 Objects and Data Structures

All methods that are only meant to be used internally are private to not unecessarly expose data and because other classes don't need to know how it works which is **The Law of Demeter**.  
Early on I had a **Train Wreck** with my LoggerDisplay class. I did not even consider it until I started this reflection.
To reset the counter, you had to do the following
```js
// Train wreck since it calls the 
const log = new LoggerDisplay(logger)
log.logInstance.resetCounter()

// Here a separate method is created in log so the loginstance is not exposed.
const log = new LoggerDisplay(logger)
log.resetCounter()

```

## Chapter 7 Error Handling
I have used try & catch blocks before but did not really understand the importance of it until reading this chapter. **Use Exceptions Rather Than Return Codes** this is something I do because return codes adds so much more code.  
I do not have a finally block in my **Try-Catch** but that would be a perfect spot to remove all created eventlisteners. I do however not know how to remove them in a good way since they are created with an abstract class.
```js
//This is an ErrorHandler which can be used in multiple classes.
export class ErrorHandler extends Error {

  constructor (argName) {
    super(`Missing argument: ${argName}`)
    this.name = 'MissingArgumentError'
  }
}

// Here it will throw an error if there isn't an element.
  returnHTMLElement (elementID) {
    const element = document.querySelector('#' + elementID)
    if (!element) {
      throw new ErrorHandler('Element')
    }
    return element
  }
```


## Chapter 8 Boundaries
I have maintained **Clean Boundaries** throughout my code, particularly with my DomHandler and Animation classes. This separation of concerns makes both classes highly reusable for future projects and simplifies testing by isolating DOM manipulation to a single class.

Through the creation of my module, I've implemented a wrapper pattern, this demonstrates effective **Use of Third-Party Code**. Users only need to use the public methods without understanding the underlying logic.

## Chapter 9 Unit Tests

I wish that I followed **The Three Laws of TDD** because that might make it faster for me to reach the point of my code I want. Instead I start coding and when I get the result, I create a tests for that result. Had I created the tests to begin with, it would probably go much faster. The tests I have in my module are **Clean Tests**, mostly because the methods are quite short.

## Chapter 10 Classes
This has been the most challenging about the assignment, mostly because I'm not very good at OOP. So it's hard for me take a class and break out what can be abstracted. I do however think Think I've managed to have **Encapsulation** in every class and to also keep them short. **Classes Should Be Small**.
**The Single Responsibility Principle** is hard for me to decide. How far you should split up every class.
I have worked with getting high **Cohesion** in my classes but it's been more difficult than I thought. 

```js
  constructor (startColor) {
    this.#animation = new Animation()
    this.#startColor = startColor
  }


  #applyColor (field, state) {
    if (field.value.length === 0) {
      field.style.backgroundColor = this.#startColor
      return
    }

    const colors = {
      valid: this.#animation.getValidBackGroundColor(),
      invalid: this.#animation.getInvalidBackGroundColor()
    }

    field.style.background = colors[state]
  }


  activateValidBackgroundColor (field) {
    this.#applyColor(field, 'valid')
  }

  activateInvalidBackgroundColor (field) {
    this.#applyColor(field, 'invalid')
  }
```

## Chapter 11 Systems
This chapter is about dividing a system in separate parts that handles 1 thing. Just like what I have done with my application. Validation handles my module that validates the input, same as DomHandler handles all DOM related data such as creating an eventlistener. I refactored my code to follow **Separate Constructing a System from Using It**.
The example code is something I do not like because the values are hardcoded. I would have preferred to use an observer pattern but I do not know to implement it and don't have the time to learn how.
```js

    document.addEventListener('counterUpdated', (event) => {
      this.updateDisplay(event.detail.counter)
    })
```
