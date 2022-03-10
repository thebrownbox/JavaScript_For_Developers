//? Write a function that takes an array of numbers as argument
//? It should return the average of the numbers

function myFunction(arr = []) {
    // let sum = 0;
    // arr.forEach((e) => (sum += e));
    // return sum / arr.length;
    return arr.reduce((sum, e) => sum + e) / arr.length;
}

console.log(myFunction([10, 100, 40]));
//* 50
console.log(myFunction([10, 100, 1000]));
//* 370
console.log(myFunction([-50, 0, 50, 200]));
//* 50
