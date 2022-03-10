// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function myFunction(...arrays) {}

console.log(myFunction([1, 2, 3], [4, 5, 6]));
//* [1, 2, 3, 4, 5, 6]
console.log(myFunction(["a", "b", "c"], [4, 5, 6]));
//* ["a", "b", "c", 4, 5, 6]
console.log(myFunction([true, true], [1, 2], ["a", "b"]));
//* [true, true, 1, 2, "a", "b"]

// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
