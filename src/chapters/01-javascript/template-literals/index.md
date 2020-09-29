# Template literals

> Source: <https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-iii-template-literals-spread-operators-generators-592765337294/>

Benefits:

* Easy expression interpolation and method calls! See examples below.
* Including complex information in the format you want is simple!
* You don’t need to worry about multiple quotation marks, multi-lines, spaces, or using `+` sign either! Only two **back ticks** recognize all the information inside of them! Woohoo!

Beware:

* Commonly called “Template Strings”, as this was their name in prior editions of ES2015 / ES6 specification.
* constiables and parameters need to be wrapper in dollar sign and curly braces, ie. placeholder `${EXAMPLE}`.
* The plus sign,`+`, inside of a Template Literal literally acts as a math operation, not a concatenation if also inside `${}`. See examples below for further explanation.

## Migrating to Template Literal Syntax

After reviewing the benefits and items to be aware of, take note of these examples and study the subtle differences with using Template Literals:

Example 1:

```javascript
// Before:
function sayHi(petSquirrelName) { console.log('Greetings ' + petSquirrelName + '!'); }
sayHi('Brigadier Sir Nutkins II'); // => Greetings Brigadier Sir Nutkins II!

// After:
function sayHi(petSquirrelName) { console.log(`Greetings ${petSquirrelName}!`); }
sayHi('Brigadier Sir Nutkins II'); // => Greetings Brigadier Sir Nutkins II!
```

Example 2:

```javascript
// Before:
console.log('first text string \n' + 'second text string');
// => first text string
// => second text string

// After:
console.log(`first text string
 second text string`);
// => first text string
// => second text string
```

Example 3:

```javascript
// Before:
const num1 = 5;
const num2 = 10;
console.log('She is ' + (num1 + num2) +  ' years old and\nnot ' + (2 * num1 + num2) + '.');
// => She is 15 years old and
// => not 20.

// After:
const num1 = 5;
const num2 = 10;
console.log(`She is ${num1 + num2} years old and\nnot ${2 * num1 + num2}.`);
// => She is 15 years old and
// => not 20.
```

Example 4:

```javascript
// Before:
const num1 = 12;
const num2 = 8;
console.log('The number of JS MVC frameworks is ' + (2 * (num1 + num2)) + ' and not ' + (10 * (num1 + num2)) + '.');
//=> The number of JS frameworks is 40 and not 200.

// After:
const num1 = 12;
const num2 = 8;
console.log(`The number of JS MVC frameworks is ${2 * (num1 + num2)} and not ${10 * (num1 + num2)}.`);
//=> The number of JS frameworks is 40 and not 200.
```

Example 5:

```javascript
// The ${} works fine with any kind of expression, including method calls:
// Before:
const registeredOffender = {name: 'Bunny BurgerKins'};
console.log((registeredOffender.name.toUpperCase()) + ' you have been arrested for the possession of illegal carrot bits!');
// => BUNNY BURGERKINS you have been arrested for the possession of illegal carrot bits!

// After:
const registeredOffender = {name: 'Bunny BurgerKins'};
console.log(`${registeredOffender.name.toUpperCase()} you have been arrested for the possession of illegal carrot bits!`);
// => BUNNY BURGERKINS you have been arrested for the possession of illegal carrot bits!
```
