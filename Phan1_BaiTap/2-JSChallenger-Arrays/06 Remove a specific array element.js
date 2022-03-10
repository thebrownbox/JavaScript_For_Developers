//? Write a function that takes an array (a) and a value (b) as argument
//? The function should clean a from
//? all occurrences of b
//? Return the filtered array

function myFunction(a = [], b) {
    return a.filter((e) => e !== b);
}

console.log(myFunction([1, 2, 3], 2));
//* [1, 3]
console.log(myFunction([1, 2, "2"], "2"));
//* [1, 2]
console.log(myFunction([false, "2", 1], false));
//* ["2", 1]
console.log(myFunction([1, 2, "2", 1], 1));
//* [2, "2"]
