"use strict";

this.name = "GLOBAL";

function normalFunction() {
    console.log("normalFunction", this?.name);
}

const x = {
    name: "x",
    method() {
        console.log("method", this?.name);
    },
};

normalFunction();
x.method();

//! Example 1: switching function => method
x.otherFunction = normalFunction;
x.otherFunction();

//! Example 2: switching function <= method
const anotherFunction = x.method;
anotherFunction();
