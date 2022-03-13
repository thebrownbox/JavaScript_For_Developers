//? Write a function that takes two date instances as argument
//? It should return true if they fall
//? on the exact same day
//? It should return false otherwise

function myFunction(a = new Date(), b = new Date()) {
    // return (
    //     a.getFullYear() === b.getFullYear() &&
    //     a.getMonth() == b.getMonth() &&
    //     a.getDate() == b.getDate()
    // );
    return a.toDateString() === b.toDateString();
}

console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/01")));
//* true
console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/02")));
//* false
console.log(
    myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);
//* true
