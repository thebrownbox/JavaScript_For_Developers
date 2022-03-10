//? Write a function that takes a string as argument
//? Extract the last 3 characters from the string
//? Return the result

function myFunction(str = "") {
    // return str.substring(str.length - 3);
    return str.slice(-3);
}

console.log(myFunction("abcdedkf")); //* dfk
console.log(myFunction("1234")); //* 234

// Ref: https://www.w3schools.com/js/js_string_methods.asp