//? Write a function that takes two date instances as argument
//? It should return true if they fall on the exact same day
//? It should return false otherwise

function myFunction(a, b) {
    return;
}

console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/01")));
//* true
console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/02")));
//* false
console.log(myFunction(new Date("2001/01/01"), new Date("2000/01/01")));
//* false
console.log(myFunction(new Date("2000/11/01"), new Date("2000/01/01")));
//* false
