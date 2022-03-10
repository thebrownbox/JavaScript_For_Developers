// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(arr = []) {}

console.log(myFunction([true, true, true, true])); //* true
console.log(myFunction(["test", "test", "test"])); //* true
console.log(myFunction([1, 1, 1, 2])); //* false
console.log(myFunction(["10", 10, 10, 10])); //* false
console.log(myFunction([1, 1, 1, "1"])); //* false
