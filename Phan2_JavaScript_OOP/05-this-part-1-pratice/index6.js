"use strict";
//! Example 8: callback function

this.name = "GLOBAL";

function executeThisFunction(inputFunction) {
    inputFunction();
}

const normalFunction = function () {
    console.log("normalFunction", this?.name);
};

const arrowFunction = () => {
    console.log("arrowFunction", this?.name);
};

executeThisFunction(normalFunction);
executeThisFunction(arrowFunction);
