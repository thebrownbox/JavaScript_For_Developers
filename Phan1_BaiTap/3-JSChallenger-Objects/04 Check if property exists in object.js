//? Write a function that takes an object (a) and a string (b) as argument
//? Return true if a has a property with key b
//? Return false otherwise

function myFunction(a, b) {
    return !!a[b];
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, "b"));
//* true
console.log(myFunction({ x: "a", y: "b", z: "c" }, "a"));
//* false
console.log(myFunction({ x: "a", y: "b", z: "c" }, "z"));
//* true
