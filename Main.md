![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)


# ASSIGNMENT-2

## Why are closures useful in JavaScript? 

### Closures : ### 

Closure is a feature available in Java Script which enables a function to access a variable outside it's lexical scope even after the entity or function enclosing the function that is trying to access the variable has finished execution and has returned. In simple words, a closure gives you access to outer function's scope from inner function.

**Uses of Closures in JavaScript:**

🎯 **_Data Privacy:_**   Generally, in all the other object - oriented programming langauages, data encapsulation is a common feature that ensures data privacy as the variablees are enclosed in the scope are not accessible by the functions out of the scope. In JavaScript, closures are a means of data encapsulation ensuring data privacy. We can create private variables in a function using closures that can only be accessed and modified using inner functions.

🎯**_Function Factories:_**  Closures allow you to create dynamic functions by scope and behaviour based on the parameters passed to it. This can be generally observed in other programming languages through method overriding and polymorphism.


```js
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```
