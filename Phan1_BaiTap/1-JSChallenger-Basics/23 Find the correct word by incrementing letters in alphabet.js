//? Write a function that takes a string as argument
//? As it is, the string has no meaning
//? Increment each letter to the next
//? letter in the alphabet
//? Return the correct word

function myFunction(str = "") {
    return str
        .split("")
        .map((e) => String.fromCharCode(e.charCodeAt(0) + 1))
        .join("");
}

console.log(myFunction("bnchmf")); //* 'coding'
console.log(myFunction("bgddrd")); //* 'cheese'
console.log(myFunction("sdrshmf")); //* 'testing'
