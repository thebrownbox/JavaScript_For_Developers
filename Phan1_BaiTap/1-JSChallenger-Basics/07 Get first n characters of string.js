//? Write a function that takes a string (a) as argument
//? Get the first 3 characters of a
//? Return the result

function myFunction(a = "") {
    // return a.substring(0, 3);
    return a.slice(0, 3);
}

console.log(myFunction("abcdedfk")); //* abc
console.log(myFunction("1234")); //* 123
