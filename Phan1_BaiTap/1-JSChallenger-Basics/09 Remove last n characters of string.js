//? Write a function that takes a string (a) as argument
//? Remove the last 3 characters of a
//? Return the result

function myFunction(a = "") {
    // return a.substring(0, a.length - 3);
    return a.slice(0, -3);
}

console.log(myFunction("abcdedfk")); //* abcde
console.log(myFunction("12345")); //* 12
