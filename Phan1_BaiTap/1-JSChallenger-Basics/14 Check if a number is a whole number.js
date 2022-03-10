//? Write a function that takes a number
//? (a) as argument
//? If a is a whole number (has no decimal place), return true
//? Otherwise, return false

function myFunction(a) {
    return Math.floor(a) - a === 0;
}

console.log(myFunction(4)); //* true;
console.log(myFunction(1.123)); //* false;
console.log(myFunction(1048)); //* true;
console.log(myFunction(10.48)); //* false;
