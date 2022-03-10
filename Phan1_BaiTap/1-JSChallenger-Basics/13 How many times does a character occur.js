//? Write a function that takes two strings
//? (a and b) as arguments
//? Return the number of times a occurs in b

function myFunction(a = "", b = "") {
    // return [...b.matchAll(a)].length;
    return b.split(a).length - 1;
}

console.log(myFunction("1", "1_1_2_1_1_2 3"));
//* 4
console.log(myFunction("2", "1 1 2 1 1 2 3"));
//* 2
console.log(myFunction("3", "1 1 2 1 1 2 3"));
//* 1
