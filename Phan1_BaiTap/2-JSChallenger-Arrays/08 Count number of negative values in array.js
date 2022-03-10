//? Write a function that takes an array of numbers as argument
//? Return the number of negative values
//? in the array

function myFunction(a = []) {
    return a.filter((e) => e < 0).length;
}

console.log(myFunction([1, -2, 2, -4])); //* 2
console.log(myFunction([0, 9, 1])); //* 0
console.log(myFunction([4, -3, 2, 1, 0])); //* 1
