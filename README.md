Validering av olika fält
Istället för att knapp trycks så lyssnar den på fältet så det uppdateras i realtid
Skapa olika klasser. App, valideringsfält, animation / ui?

Ifall koden blir kort, lägg till någon loggning för att se antal test som genomförts. Detta kan då läggas i en egen klass som Logger

```
classDiagram
    InputField --> Validation : använder
    InputField --> Animation : använder

    class InputField {
        +string inputID
        +string value
        +getValue()
    }

    class Validation {
        +boolean isValid(value)
    }

    class Animation {
        +string backgroundColor
        +changeBackground(isValid)
    }

```