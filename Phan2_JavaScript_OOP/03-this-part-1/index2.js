"use strict";
//example 2: Object & functionPointer

const x = {
    name: "x",
    normalFunction() {
        console.log("normalFunction", this);
    },
    arrowFunction: () => {
        console.log("arrowFunction", this);
    },
};

x.normalFunction();
x.arrowFunction();

const functionPointer = x.normalFunction;
functionPointer();

const arrowFunctionPointer = x.arrowFunction;
arrowFunctionPointer();
