//? Write a function that takes a string (a) and a number (n) as argument
//? Return the nth character of 'a'

function myFunction(a = "", n) {
    return a[n - 1];
}

console.log(myFunction("abc", 1)); //* a
console.log(myFunction("abc", 2)); //* b

//Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String?retiredLocale=vi#character_access
