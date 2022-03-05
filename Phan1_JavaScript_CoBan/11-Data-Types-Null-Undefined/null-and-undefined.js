process.stdout.write("\033c");
//! ===============================================
// let x;
// console.log(x);

// function sum(a, b) {
//     const c = a + b;
// }
// console.log(sum(1, 2));

// function print(a, b) {
//     console.log("a = " + a);
//     console.log("b = " + b);
// }
// print(1);

// const myObj = {
//     name: "Jack",
// };

// console.log(myObj.age);

// const x = void 0;
// console.log(typeof x);

// console.log(typeof null);

//! ===============================================
const undefined = "xx";
function checkNullUndefined(x) {
    if (x) {
        console.log("if (x):", "x is OK");
    } else {
        console.log("if (x):", "x is null/undefined!");
    }

    // undefined == undefined
    if (x == void 0) {
        console.log("x == undefined: ", "x is null/undefined!");
    } else {
        console.log("x == undefined:", "x is OK");
    }

    if (typeof x == "undefined") {
        console.log("typeof x: ", "x is null/undefined!");
    } else {
        console.log("typeof x:", "x is OK");
    }

    if (typeof x == "object" && x == null) {
        console.log("typeof x: ", "x is null/undefined!");
    } else {
        console.log("typeof x:", "x is OK");
    }
}
let x = void 0;
checkNullUndefined(x);
