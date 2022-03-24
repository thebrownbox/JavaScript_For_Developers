"use strict";

//! Example 9: callback in a method

this.name = "GLOBAL";

const x = {
    name: "x",
    executeThisFunction(inputFunction) {
        inputFunction();
    },
};

const normalFunction = function () {
    console.log("normalFunction", this?.name);
};

const arrowFunction = () => {
    console.log("arrowFunction", this?.name);
};

x.executeThisFunction(normalFunction);
x.executeThisFunction(arrowFunction);
