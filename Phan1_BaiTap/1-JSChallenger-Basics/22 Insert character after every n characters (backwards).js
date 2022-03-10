//? Write a function that takes two strings (a and b) as arguments
//? Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
//? Return the resulting string

function myFunction(a = "", b) {}

console.log(myFunction("1234567", ".")); //* '1.234.567'
console.log(myFunction("abcde", "$")); //* 'ab$cde'
console.log(myFunction("zxyzxyzxyzxyzxyz", "w")); //* 'zwxyzwxyzwxyzwxyzwxyz'
