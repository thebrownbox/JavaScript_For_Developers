"use strict";
//! Example 8: callback function

this.name = "GLOBAL";

function executeThisFunction(inputFunction) {
    inputFunction();
}

function normalFunction() {
    console.log("normalFunction", this?.name);
}

const arrowFunction = () => {
    console.log("arrowFunction", this?.name);
};

executeThisFunction(normalFunction);
executeThisFunction(arrowFunction);
