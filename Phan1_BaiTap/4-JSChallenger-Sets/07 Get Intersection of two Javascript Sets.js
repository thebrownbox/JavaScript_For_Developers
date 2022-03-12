//? Write a function that takes two sets (a and b) as arguments
//? Get the intersection of the sets
//? In other words, return a set containing all elements that are both in a as well as b

function myFunction(a = new Set(), b = new Set()) {}

console.log(myFunction(new Set([1, 2, 3]), new Set([4, 5, 6])));
//* new Set()
console.log(myFunction(new Set("12345"), new Set([..."45678"])));
//* new Set('45')
console.log(myFunction(new Set([1, 2, 3]), new Set([2, 3, 4])));
//* new Set([2, 3])
