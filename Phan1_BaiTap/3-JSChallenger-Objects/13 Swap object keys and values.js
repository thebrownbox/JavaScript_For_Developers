//? Write a function that takes an object as argument
//? Somehow, the properties and keys
//? of the object got mixed up
//? Swap the Javascript object's key with its
//? values and return the resulting object

function myFunction(obj) {
    const x = {};
    // for (const key in obj) {
    //     x[obj[key]] = key;
    // }
    Object.entries(obj).forEach(([key, value]) => (x[value] = key));
    return x;
}

console.log(myFunction({ z: "a", y: "b", x: "c", w: "d" }));
//* {a:'z',b:'y',c:'x',d:'w'}
console.log(myFunction({ 2: "a", 4: "b", 6: "c", 8: "d" }));
//* {a:'2',b:'4',c:'6',d:'8'}
console.log(myFunction({ a: 1, z: 24 }));
//* {1:'a',24:'z'}
