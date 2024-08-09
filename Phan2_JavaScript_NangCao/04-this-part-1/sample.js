"use strict";

//! 1. 'this' is alone
this.name = "GLOBAL";
console.log("alone", this?.name);

//! 2. 'this' in a method
const x = {
    name: "x",
    method() {
        console.log("method", this?.name);
    },
};

x.method();

//! 3. 'this' in a regular function
function normalFunction() {
    console.log("normalFunction", this?.name);
}

normalFunction();

//! 4. 'this' in a regular function
const arrowFunction = () => {
    console.log("arrowFunction", this?.name);
};

arrowFunction();
