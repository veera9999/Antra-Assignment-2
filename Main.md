![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)


# ASSIGNMENT-2

## Why are closures useful in JavaScript? Give an example use case.

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
