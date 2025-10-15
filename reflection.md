# Reflection 
Kodkvalitetskrav för betyg A-E
Gå igenom all kod inklusive kod från laboration 2 (OBS!: Separat branch från den ni lämnat in i laboration 2) och uppdatera 
enligt bokens clean code kapitel 2-11 och det vi diskuterat på föreläsningar och workshops. Skriv en kort (4-6 meningar) 
reflektion för varje kapitel om hur just det kapitlet har påverkat eller inte påverkat din kod. Använd bokens termer. 
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
During L2 and L3 I do not find the use of comments since they methods are quite small and easy to understand. It feels as if 
you create clean code, comments are not needed as I dont need to **Explan Yourself in Code**.
However previous when using AI, I used comments because I would not understand 100% what they did
if I went back 2 week later.


## Chapter 5 Formatting

Since I've tried to more OOP, it results in more classes which in return make each class much shorter. So I have not 
had a problem with **Vertical Formatting**.
I have all methods in the order they are called. **Dependent Functions**
One of the reasons I use Eslint is because of **Identation**
I use 125 max characters per line to make it easier to read as described in **Horizonal Formatting**

## Chapter 6 Objects and Data Structures

## Chapter 7 Error Handling

## Chapter 8 Boundaries

## Chapter 9 Unit Tests

## Chapter 10 Classes

## Chapter 11 Emergence
