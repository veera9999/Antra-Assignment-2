![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)


# ASSIGNMENT-2

## Why are closures useful in JavaScript? 

### [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#creating_closures_in_loops_a_common_mistake) : ### 

Closure is a feature available in Java Script which enables a function to access a variable outside it's lexical scope even after the entity or function enclosing the function that is trying to access the variable has finished execution and has returned. In simple words, a closure gives you access to outer function's scope from inner function.

**Uses of Closures in JavaScript:**

🎯 **_Data Privacy:_**   Generally, in all the other object - oriented programming langauages, data encapsulation is a common feature that ensures data privacy as the variablees are enclosed in the scope are not accessible by the functions out of the scope. In JavaScript, closures are a means of data encapsulation ensuring data privacy. We can create private variables in a function using closures that can only be accessed and modified using inner functions.

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

🎯 **_Function Factories:_**  Closures allow you to create dynamic functions by scope and behaviour based on the parameters passed to it. This can be generally observed in other programming languages through method overriding and **polymorphism**.


```js

// function to explain Function factory through closures
function Multiply(factor) {
  return (number) => number * factor;
}

const double = Multiply(2);
console.log(double(4));  // output: 8

const triple = Multiply(3);
console.log(triple(8)); //output: 24
```
🎯 **_Maintainining State:_**   closures are also useful in maintaining state between function calls without using global variables. This is particularly useful in scenarios when we need to cache cost expensive function calls.

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
