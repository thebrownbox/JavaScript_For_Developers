//? Write a function that takes a string
//? (a) as argument
//? Remove the first 3 characters of a
//? Return the result

function myFunction(a = "") {
    // return a.substring(3);
    return a.slice(3);
}

console.log(myFunction("abcdedfk")); //* dedfk
console.log(myFunction("1234")); //* 4

// Ref: https://www.w3schools.com/js/js_string_methods.asp
