//? Write a function that takes an
//? array of objects as argument
//? Sort the array by property b
//? in ascending order
//? Return the sorted array

function myFunction(arr = []) {
    return arr.sort((o1, o2) => o1.b - o2.b);
}

console.log(
    myFunction([
        { a: 1, b: 5 },
        { a: 5, b: 4 },
    ])
);
//* [{ a: 1, b: 2 }, { a: 5, b: 4 }]
