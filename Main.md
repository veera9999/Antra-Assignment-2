![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)

# ASSIGNMENT-2

============================================================================================

## Why are closures useful in JavaScript?

### [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#creating_closures_in_loops_a_common_mistake) :

Closure is a feature available in Java Script which enables a function to access a variable outside it's lexical scope even after the entity or function enclosing the function that is trying to access the variable has finished execution and has returned. In simple words, a closure gives you access to outer function's scope from inner function.

**Uses of Closures in JavaScript:**

🎯 **_Data Privacy:_** Generally, in all the other object - oriented programming langauages, data encapsulation is a common feature that ensures data privacy as the variablees are enclosed in the scope are not accessible by the functions out of the scope. In JavaScript, closures are a means of data encapsulation ensuring data privacy. We can create private variables in a function using closures that can only be accessed and modified using inner functions.

```js
//function to explain Data Privacy through closures
function createCounter() {
  let count = 0; // This is a private variable

  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
    getCount: () => {
      return count;
    },
  };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
```

🎯 **_Function Factories:_** Closures allow you to create dynamic functions by scope and behaviour based on the parameters passed to it. This can be generally observed in other programming languages through method overriding and **polymorphism**.

```js
// function to explain Function factory through closures
function Multiply(factor) {
  return (number) => number * factor;
}

const double = Multiply(2);
console.log(double(4)); // output: 8

const triple = Multiply(3);
console.log(triple(8)); //output: 24
```

🎯 **_Maintainining State:_** closures are also useful in maintaining state between function calls without using global variables. This is particularly useful in scenarios when we need to cache cost expensive function calls.

```js
//Function to explain memorization and state maintenance using closures
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10)); // 55
console.log(memoizedFibonacci(10)); // 55 (retrieved from cache)
console.log(memoizedFibonacci(20)); // 6765
console.log(memoizedFibonacci(20)); // 6765 (retrieved from cache)
```

## When should you choose to use “let” or “const”

_**let**_ and **_const_** were introduced in JavaScript with the release of ECMAScript 6 (ES6) in 2015. They provide block-scoped variables and constants, which offer more predictable and manageable scoping behavior compared to the traditional var.

Before ES6, var was the only way to declare variables. It has several shortcomings:

❌ _Function Scope:_ Variables declared with **var** are function-scoped, which can lead to confusion and errors, especially in larger codebases.

```js
function example() {
  if (true) {
    var x = 5;
  }
  console.log(x); // 5 (x is function-scoped, not block-scoped)
}
example();
```

❌ _Hoisting:_ Variables declared with **var** are hoisted to the top of their enclosing function or global scope, which can lead to unexpected behavior.

```js
console.log(x); // undefined (x is hoisted but not initialized)
var x = 10;
```

❌ _No Block Scope:_ **var** does not respect block scope, which can cause variables to be accessible outside of the intended block.

```js
if (true) {
  var x = 10;
}
console.log(x); // 10 (x is accessible outside the block)
```

_**"let"**_

- _Block Scope:_ Variables declared with **let** are limited to the block, statement, or expression in which they are used.
- _No Hoisting:_ While **let** variables are hoisted to the top of their block, they are not initialized until the let statement is executed. This results in a "temporal dead zone" from
  the start of the block until the declaration is encountered.
- _Reassignment:_ Variables declared with **let** can be reassigned.

```js
let x = 10;
if (x > 5) {
  let y = x + 5;
  console.log(y); // 15
}
console.log(y); // ReferenceError: y is not defined
```

**_"const"_**

- _Block Scope:_ Like **let**, variables declared with const are block-scoped.
- _No Hoisting:_ The **const** variables are not hoisted to the top of their block, but not initialized until **const** statement is executed similar to **let**. This also results in "temporal dead
  zone"
- _No Reassignment:_ Variables declared with **const** cannot be reassigned. They are read-only after the initial assignment.
- _Immutable Binding:_ While the binding is immutable, the content of the variable (such as an object or array) can still be modified.

```js
const x = 10;
x = 20; // TypeError: Assignment to constant variable.

const arr = [1, 2, 3];
arr.push(4); // This is allowed
console.log(arr); // [1, 2, 3, 4]
```

```js
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
console.log(x); // 10

console.log(y); // ReferenceError: Cannot access 'y' before initialization
const y = 20;
console.log(y); // 20

console.log(z); // undefined
var z = 30;
console.log(z); // 30
```

### When to Use let and const

- _const:_ we should use **const** for declaring variables that should not be reassigned and which should be treated as constants. Using const by default is generally suggested as it makes our code easier to understand and more predictable.

```js
const PI = 3.14;
```

- _let:_ We should use **let** while declaring variables that need to be reassigned Use let when you need to reassign a variable. This is typically used for loop counters, variables that will change value, or in situations where the variable needs to be initialized later.

```js
let counter = 0;
counter++;
```

## An example of a common mistake related to hoisting and how to fix it

Most often, common mistakes related to hoisting will happen while trying to access variable declared with **var** before it's declaration. When a variable is declared with var, only the declaration is hoisted to the top of the scope, not the variable initialization.

```js
console.log(x); // Outputs: undefined
var x = 5;
console.log(x); // Outputs: 5
```

We can fix this in two simple ways:

- Always following the conventional practice of declaring and initializing variable at the top of the scope before trying to access the variable.

```js
var x = 5;
console.log(x); // Outputs: 5
console.log(x); // Outputs: 5
```

- Use **let** or **const** to declare a variable. Using let or const creates a "temporal dead zone" from the start of the block until the declaration is processed. This means that if you try to access the variable before it's declared, you'll get a ReferenceError, which is often more helpful for debugging than the undefined behavior of var.

```js
console.log(x); // Throws ReferenceError: Cannot access 'x' before initialization
const x = 5;
console.log(x); // This line is never reached due to the error
```

Another common mistake is using **var** in loops, which can lead to unexpected behavior due to its function-scoped nature.

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // 3, 3, 3
  }, 1000);
}
```

The var i declaration is hoisted to the function scope.
By the time the setTimeout callback runs, the loop has completed, and i is 3.

We can fix this mistake by declaring loop variables with **let**. Using **let** in the loop will create a new binding for each iteration, preserving the expected behavior.

```js
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // 0, 1, 2
  }, 1000);
}
```

The **let** i declaration is block-scoped.
Each iteration of the loop creates a new i, preserving the value for the _setTimeout_ callback.

## What will the outcome of each console.log() be after the function calls? Why?

```js
const arr = [1, 2];
function foo1(arg) {
  arg.push(3);
}
foo1(arr);
console.log(arr);

function foo2(arg) {
  arg = [1, 2, 3, 4];
}
foo2(arr);
console.log(arr);

function foo3(arg) {
  let b = arg;
  b.push(3);
}
foo3(arr);
console.log(arr);

function foo4(arg) {
  let b = arg;
  b = [1, 2, 3, 4];
}
foo4(arr);
console.log(arr);
```

_**Explanation:**_

- Initially, the array **arr** is **[1,2]**

```js
const arr = [1, 2];
console.log(arr); // [1,2]
```

- After the **foo1()** function call, **3** is pushed to the **arr** and the **arr** becomes **[1,2,3]** as the array arr is passed to the **foo1()** as reference, so any changes made to the argument **arg** in **foo1()** will reflect in **arr**

```js
// arr --> [1.2,3] after foo1()
function foo1(arg) {
  arg.push(3);
}
foo1(arr);
console.log(arr);
```

- Now, the **arr** is passed as an argument to the function **foo2()** . In **foo2()**, the **arg** is assigned new array [1,2,3,4]. Here, even though the **arr** is passed as reference to **foo2()** and the **arg** refers to the same memory location as **arr**, the reassignement of **arg** doesn't affect **arr** as the **arg** is local to the function scope of **foo2()** and the reassignment only changes what **arg** points to within function scope.

```js
function foo2(arg) {
  arg = [1, 2, 3, 4];
}
foo2(arr);
console.log(arr); // [1,2,3]
```

\*In the case of **foo3()**, the variable **b** is assigned to the array **arg** which refers to **arr**, so technically the **b** is also refering to the **arr**, so any changes made to **b** will be reflected in **arr** . Hence the **arr** will become [1,2,3,3].

```js
function foo3(arg) {
  let b = arg;
  b.push(3);
}
foo3(arr);
console.log(arr); //[1,2,3,3]
```

- Finally, with the function call **foo4()**, the variable **b** was assigned **args** which is referring to **arr** but was reassigned a new array. It doesn't affect the **arr** as the variable **b** is local to the scope of function **foo4()**, similar to the case of **foo2()** .

```js
function foo4(arg) {
  let b = arg;
  b = [1, 2, 3, 4];
}
foo4(arr);
console.log(arr); //[1,2,3,3]
```
