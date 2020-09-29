# Arrow Functions


> Source: <https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/>

## So, what the heck is `=>`

You’ve probably seen these strange Egyptian-looking hieroglyphics symbols here and there, especially in someone else’s code, where you’re currently debugging a `this` keyword issue. After an hour of tinkering, you’re now roaming the Google search bar and stalking Stack Overflow. Sound familiar?

Together, let’s cover three topics:

* How the `this` keyword relates to `=>`.
* How to migrate functions from ES5 to ES6.
* Important quirks to be aware of when using `=>`.

## Arrow Functions: `=>`

Arrow functions were created to simplify function scope and make using the `this` keyword much more straightforward. They utilize the `=>` syntax, which looks like an arrow. Even though I don’t think it needs to go on a diet, people call it “the fat arrow” (and Ruby enthusiasts may know it better as the “hash rocket” ) — something to be aware of.

## How the `this` keyword relates to Arrow Functions

Before we dive deeper into ES6 arrow functions, it’s important to first have a clear picture of what `this` binds to in ES5 code.

If the `this` keyword were inside an object’s **method** (a function that belongs to an object), what would it refer to?

```javascript
// Test it here: https://jsfiddle.net/maasha/x7wz1686/
var bunny = {
  name: 'Usagi',
  showName: function() {
    alert(this.name);
  }
};

bunny.showName(); // Usagi
```

Correct! It would refer to the object. We’ll get to why later on.

Now what about if the `this` keyword were inside of method’s function

```javascript
// Test it here: https://jsfiddle.net/maasha/z65c1znn/
var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function() {
    this.tasks.forEach(function(task) {
      alert(this.name + " wants to " + task);
    });
  }
};

bunny.showTasks();
// [object Window] wants to transform
// [object Window] wants to eat cake
// [object Window] wants to blow kisses

// please note, in jsfiddle the [object Window] is named 'result' within inner functions of methods.
```

What did you get? Wait, what happened to our bunny…?

Ah, did you think `this` refers to the method’s inner function?

Perhaps the object itself?

You are wise to think so, yet it is not so. Allow me to teach you what the coding elders had once taught me:

Coding Elder: “_Ah yes, the code is strong with this one. It is indeed practical to think that the `this` keyword binds to the function but the truth is, `this` has now fallen out of scope… It now belongs to…”, he pauses as if experiencing inner turmoil, “the window object._”

That’s right. That’s exactly how it happened.

Why does `this` bind to the window object? **Because `this`, always references the owner of the function it is in, for this case — since it is now out of scope — the window/global object.**

When it is inside of an object’s method — the function’s owner is the object. Thus the `this` keyword is bound to the object. Yet when it is inside of a function, either stand alone or within another method, it will always refer to the window/global object.

```javascript
// Test it here: https://jsfiddle.net/maasha/g278gjtn/
var standAloneFunc = function(){
  alert(this);
}

standAloneFunc(); // [object Window]
```

But why…?

This is known as a JavaScript quirk, meaning something that just happens within JavaScript that isn’t exactly straightforward and it doesn’t work the way you would think. This was also regarded by developers as a poor design choice, which they are now remedying with ES6's arrow functions.

Before we continue, it’s important to be aware of two clever ways programmers solve the `this` problem within ES5 code, especially since you will continue to run into ES5 for awhile (not every browser has fully migrated to ES6 yet):

\#1 Create a variable outside of the method’s inner function. Now the ‘forEach’ method gains access to `this` and thus the object’s properties and their values. This is because `this` is being stored in a variable while it is still within the scope of the object’s direct method ‘showTasks’.

```javascript
// Test it here: https://jsfiddle.net/maasha/3mu5r6vg/
var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function() {
    var _this = this;
    this.tasks.forEach(function(task) {
      alert(_this.name + " wants to " + task); 
    });
  }
};

bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses
```

\#2 Use bind to attach the `this` keyword that refers to the method to the method’s inner function.

```javascript
// Test it here: https://jsfiddle.net/maasha/u8ybgwd5/
var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function() {
    this.tasks.forEach(function(task) {
      alert(this.name + " wants to " + task);
    }.bind(this));
  }
};

bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses
```

And now introducing…Arrow functions! Dealing with `this` issue has never been easier and more straightforward! The simple ES6 solution:

```javascript
// Test it here: https://jsfiddle.net/maasha/che8m4c1/
var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks() {
    this.tasks.forEach((task) => {
      alert(this.name + " wants to " + task);
    });  
  }
};

bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses
```

While in ES5 `this` referred to the parent of the function, in ES6, arrow functions use lexical scoping — `this` refers to it’s current surrounding scope and no further. Thus the inner function knew to bind to the inner function only, and not to the object’s method or the object itself.

## How to migrate functions from ES5 to ES6.

```javascript
// Before
let bunny = function(name) {
  console.log("Usagi");
}
```

* **Step 1**: Remove the word `function`.

  ```javascript
  let bunny = (name) {
    console.log("Usagi");
  }
  ```

* **Step 2**: If your code is less than a line, remove brackets and place on one line.

  ```javascript
  let bunny = (name) console.log("Usagi");
  ```

* **Step 3**. Add the hash rocket.

  ```javascript
  let bunny = (name) => console.log("Usagi");
  ```

```javascript
// After
let bunny = (name) => console.log("Usagi")
```

You did it! Great job! Simple enough right? Here are a few more examples utilizing the fat — er skinny arrow, to get your eyes accustomed:

1. ES6: if passing one argument you don't need to include parenthesis around parameter.

  ```javascript
  var kitty = name => name;

  // same as ES5:
  var kitty = function(name) {
    return name;
  };
  ```

2. ES6: no parameters example.
  
  ```javascript
  var add = () => 3 + 2;

  // same as ES5:
  var add = function() {
    return 3 + 2;
  };
  ```

3. ES6: if function consists of more than one line or is an object, include braces.

  ```javascript
  var objLiteral = age => ({ name: "Usagi", age: age });

  // same as ES5:
  var objLiteral = function(age) {
    return {
      name: "Usagi",
      age: age
    };
  };
  ```

4. ES6: promises and callbacks.

  ```javascript
  // #4 
  asyncfn1()
    .then(() => asyncfn2())
    .then(() => asyncfn3())
    .then(() => done());

  // same as ES5:
  asyncfn1().then(function() {
    asyncfn2();
  }).then(function() {
    asyncfn3();
  }).done(function() {
    done();
  });
  ```

Important quirks to be aware of when using Arrow functions

If you use the `new` keyword with `=>` functions it will throw an error. Arrow functions can’t be used as a constructor — normal functions support the `new` via the property prototype and internal method \[\[Construct\]\]. Arrow functions don’t use neither, thus the new `(() => {})` throws an error.

Further quirks to consider:

```javascript
// Line breaks are not allowed and will throw a syntax error
let func1 = (x, y)
=> {
  return x + y;
}; // SyntaxError

// But line breaks inside of a parameter definition is ok
let func6 = (
  x,
  y
) => {
	return x + y;
}; // Works!

// If an expression is the body of an arrow function, you don’t need braces:
asyncFunc.then(x => console.log(x));

// However, statements have to be put in braces:
asyncFunc.catch(x => { throw x });

// Arrow functions are always anonymous which means you can’t just declare 
// them as in ES5:
function squirrelLife() {
  // play with squirrels, burrow for food, etc.
}

// Must be inside of a variable or object property to work properly:
let squirrelLife = () => {
  // play with squirrels, burrow for food, etc.
  // another super squirrel action.
}

```

---

## Summary

An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the `this`, `arguments`, `super`, or `new.target` keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.

Arrow functions can be used in most cases. They provide just a shorter syntax. You can omit the `function` keyword. In return you add an `=>` symbol after the argument list. This explains why the are called `arrow` functions.

Regular function syntax:

```js
const sayHello = function(name) {
  return `Hello ${name}!`
}
```

Arrow function  syntax:

```js
const sayHello = (name) => {
  return `Hello ${name}!`
}
```

::: tip Arrow function syntax
The `function` keyword is omitted, and instead an `=>` is inserted after the argument list
:::

## Even Shorter

Whenever you only have a single expression inside the arrow function body, you can omit the `{}` brackets as well. The statement is also returned by default. Resulting in an even shorter syntax.

```js
const sayHello = (name) => `Hello ${name}!`
```

## Arrow Function Arguments

If an arrow function provides any arguments, they can be listed between the () parentheses.

When there is only one argument, the parentheses even become optional:

```js
const sayHello = name => `Hello ${name}!`
```

When no arguments are needed, an empty pair of parentheses is used:

```js
const sayHello = () => `Hello World!`
```

## Functions as Function Arguments

Arrow functions are extremely useful when you need to use functions as arguments.

```js
waitForResult()
.then( result => console.log(result) )
```

this equals to

```js
waitForResult()
.then( function(result) {
  console.log(result)
})
```
