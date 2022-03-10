//? Write a function that takes an array (a) as argument
//? Return the number of elements in a

function myFunction(a = []) {
    return a.length;
}

console.log(myFunction([1, 2, 2, 4])); //* 4
console.log(myFunction([9, 9, 9])); //* 3
console.log(myFunction([4, 3, 2, 1, 0])); //* 5
