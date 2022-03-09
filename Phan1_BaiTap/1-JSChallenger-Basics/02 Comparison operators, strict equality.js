//? Write a function that takes two values, 
//? say a and b, as arguments
//? Return true if the two values are equal 
//? and of the same type

function myFunction(a, b) {
    return a === b;
}

console.log(myFunction(1, 1)); //* TRUE
console.log(myFunction(1, '1')); //* FALSE
