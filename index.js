// //function to explain Data Privacy through closures
// function createCounter() {
//   let count = 0; // This is a private variable

//   return {
//     increment: () => {
//       count++;
//       return count;
//     },
//     decrement: () => {
//       count--;
//       return count;
//     },
//     getCount: () => {
//       return count;
//     },
//   };
// }

// const counter = createCounter();

// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); // 1
// console.log(counter.getCount()); // 1

// // function to explain Function factory through closures
// function Multiply(factor) {
//   return (number) => number * factor;
// }

// const double = Multiply(2);
// console.log(double(4));  // output: 8

// const triple = Multiply(3);
// console.log(triple(8)); //output: 24

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
console.log(memoizedFibonacci(19)); // 6765
console.log(memoizedFibonacci(20)); // 6765 (retrieved from cache)
