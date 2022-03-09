//?? Write a function that takes a value as argument
//?? Return the type of the value

function myFunction(a) {
    return typeof a;
}


console.log(myFunction(1));  //* number
console.log(myFunction('2'));//* string
console.log(myFunction({})); //* object