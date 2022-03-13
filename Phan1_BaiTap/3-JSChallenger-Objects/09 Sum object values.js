//? Write a function that takes an object (a) as argument
//? Return the sum of all object values

function myFunction(a) {
    // let sum = 0;
    // for (const key in a) {
    //     sum += a[key];
    // }
    // return sum;
    const arr = Object.values(a);
    return arr.reduce((sum, e) => sum + e);
}

console.log(myFunction({ a: 1, b: 2, c: 3 }));
//* 6
console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }));
//* 18
console.log(myFunction({ w: 15, x: 22, y: 13 }));
//* 50
