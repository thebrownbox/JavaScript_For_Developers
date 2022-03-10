//? Write a function that takes an array of strings as argument
//? Return the longest string

function myFunction(arr = []) {
    // let result = "";
    // arr.forEach((s) => {
    //     if (s.length > result.length) {
    //         result = s;
    //     }
    // });
    // return result;

    // let result = "";
    // for (const s of arr) {
    //     if (s.length > result.length) {
    //         result = s;
    //     }
    // }
    // return result;

    return arr.reduce((result, s) => (result.length > s.length ? result : s));
}

console.log(myFunction(["help", "me"]));
//* "help"
console.log(myFunction(["I", "need", "candy"]));
//* "candy"
