//? Write a function that takes two strings (a and b) as arguments
//? Beginning at the end of 'a',
//? insert 'b' after every 3rd character of 'a'
//? Return the resulting string

function myFunction(a = "", b) {
    let index = -3;
    while (Math.abs(index) <= a.length) {
        a = a.slice(0, index) + b + a.slice(index);
        index -= 4;
    }
    return a;
}

console.log(myFunction("1234567", "."));
//* '1.234.567'
console.log(myFunction("abcde", "$"));
//* 'ab$cde'
console.log(myFunction("zxyzxyzxyzxyzxyz", "w"));
//* 'zwxyzwxyzwxyzwxyzwxyz'
