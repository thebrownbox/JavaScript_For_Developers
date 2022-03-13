//? Write a function that takes an array of numbers as argument
//? Convert the array to an object
//? It should have a key for each unique value
//? of the array
//? The corresponding object value should
//? be the number of times the key occurs
//? within the array

function myFunction(a = []) {
    const x = {};
    for (const value of a) {
        x[value] = x[value] ? x[value] + 1 : 1;
    }
    return x;
}

console.log(myFunction([1, 2, 2, 3]));
//* {1:1,2:2,3:1}
console.log(myFunction([9, 9, 9, 99]));
//* {9:3,99:1}
console.log(myFunction([4, 3, 2, 1]));
//* {1:1,2:1,3:1,4:1}
