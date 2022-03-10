//? Write a function that takes an array (a) and a number (n) as arguments
//? It should return the last n elements of a

function myFunction(a = [], n) {
    return a.slice(-n);
}

console.log(myFunction([1, 2, 3, 4, 5], 2));
//* [4, 5]
console.log(myFunction([1, 2, 3], 6));
//* [1, 2, 3]
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3));
//* [6, 7, 8]
