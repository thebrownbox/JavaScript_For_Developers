//? Write a function that takes two numbers
//? (min and max) as arguments
//? Return an array of numbers in
//? the range min to max

function myFunction(min, max) {
    const a = [];
    for (let i = min; i <= max; i++) {
        a.push(i);
    }
    return a;
}

console.log(myFunction(2, 10));
//* [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myFunction(1, 3));
//* [1, 2, 3]
console.log(myFunction(-5, 5));
//* [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
console.log(myFunction(2, 7));
//* [2, 3, 4, 5, 6, 7]
