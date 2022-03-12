//? Write a function that takes three elements of any type as arguments
//? Create a Set from those elements
//? Return the result

function myFunction(a, b, c) {}

console.log(myFunction(1, "b", 3));
//* new Set([1, 'b', 3])
console.log(myFunction(NaN, null, false));
//* new Set([NaN, null, false])
console.log(myFunction("a", ["b"], { c: 3 }));
//* new Set(['a', ['b'], { c: 3 }])
