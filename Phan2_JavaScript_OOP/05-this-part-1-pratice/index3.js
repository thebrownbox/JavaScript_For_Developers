"use strict";
//example 3: arrow function
this.name = "GLOBAL";
const x = {
    name: "x",
    arrowFunction: () => {
        console.log("arrowFunction", this?.name);
    },
};

x.arrowFunction();

const arrowFunctionPointer = x.arrowFunction;
arrowFunctionPointer();
