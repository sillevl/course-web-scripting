# `let`, `const` and `var`

> Source: <https://www.freecodecamp.org/news/learn-es6-the-dope-way-i-const-let-var-ae828580472b/>

First up, what’s the deal with `const`, `let`, and `var`?

You’ve probably been a witness to one of these situations — `let` and/or `const` being substituted for `var`, or `let` and `const` being used in the same code at the same time, or even more perplexing, `let`, `const` AND `var` all being used at the once!?

Hey no worries, I got you. Let’s clear this fog together:

## const

Benefits:

* Useful if you’re setting a variable that you don’t plan on changing.
* Protects and prevents your variables from reassignment.
* In compiled languages, there is an increase in runtime efficiency of your code and thus an overall performance boost vs using plain ‘ol var.

Beware:

* Works as it should in Chrome and Firefox. But not in Safari. Instead it acts as a normal variable, as if it were var, and thus can be reassigned.
* Generally there is programming convention to set the name in all caps to show others reading your code that the value of the const value should not be changed — you will witness both lowercase and caps const coding situations. Just something to be aware of.

Examples:

```javascript
// sometimes used as lowercase as when setting up your server.
const express = require('express');
const app = express();

// sometimes uppercase.
const DONT_CHANGE_ME_MAN = "I ain't changing for no one, man."

// change attempt #1
const DONT_CHANGE_ME_MAN = "I told I ain’t changing for no one."
// change attempt #2
var DONT_CHANGE_ME_MAN = "Still not changing, bro."
// change attempt #3
DONT_CHANGE_ME_MAN = "Haha, nice try, still not happening."

// same error for all 3 attempts, const value stays the same:
Uncaught TypeError: Identifier 'const DONT_CHANGE_ME_MAN' has already been declared.

// DONT_CHANGE_ME_MAN still results in “I ain’t changing for no one, man.”
```

Does that make sense?

## let

Students and experienced programmers coming from a Ruby or Python background will love `let`, as it enforces **block scoping**!

As you migrate over to ES6 country, you may notice yourself adjusting to a new let metamorphosis taking over your coding style, and find yourself less likely to using var anymore. With let it’s so much more clear now where your values are coming from without worrying about them being hoisted!

Benefits:

* Block-Scoping, your variable’s values are exactly as they should be in that current scope and they are not hoisted as with var.
* Super useful if you don’t want your values to be overwritten, like in a for loop.

Beware:

* You may not always want to use let. For example in situations where variables aren’t as easily block scoped, var may be more convenient.

Examples:

```javascript
// When using var what do we get?
var bunny = "eat carrot";

if(bunny) {
  var bunny = "eat twig";
  console.log(bunny) //  "eat twig"
}

console.log(bunny)// "eat twig"

// When using let what do we get?
let bunny = "eat carrot";

if(bunny) {
  let bunny = "eat twig";
  console.log(bunny) // "eat twig"
}

console.log(bunny)// "eat carrot"
```

Do you see the difference? It’s all about scope. With `var`, it has access to it’s parent/outer scope and thus can change the value inside the if statement. Unlike let which is block-scoped and can only be altered within the current scope it’s in.

let is super straight-forward. It’s like a person who speaks straight to your face and tells you exactly what they need right then and there while var does this as well but may occasionally reply with unexpected answers — due to hoisting and access to outer scope variables. Depending on the situation either one may be in your favor.

Another great example on the benefits of let:

Say you want to create a game board of 30 divs and each one has their own value. If you were to do this with `var`, the `i` index would be overwritten for every iteration — every single div would have the value of 30! Yikes!

On the other hand, with let, every div has its own value, as its own div scope is maintained for each iteration! See the difference:

```javascript
// with var. See example live: https://jsfiddle.net/maasha/gsewf5av/
for(var i= 0; i<30; i++){
  var div = document.createElement('div');
  div.onclick = function() {
    alert("you clicked on a box " + i);
   };
   document.getElementsByTagName('section')[0].appendChild(div);
}
```

```javascript
// with let. See example live: https://jsfiddle.net/maasha/xwrq8d5j/
for(let i=0; i<30; i++) {
  var div=document.createElement(‘div’);
  div.onclick = function() {
    alert("you clicked on a box " + i);
   };
   document.getElementsByTagName('section')[0].appendChild(div);
}
```
