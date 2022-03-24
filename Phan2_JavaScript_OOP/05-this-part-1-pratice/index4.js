"use strict";
//! Example 6: nested functions
this.name = "GLOBAL";

function globalFunction() {
    const nestedFunction = function () {
        console.log("nestedFunction", this?.name);
    };

    const arrowFunctionInAFunction = () => {
        console.log("arrowFunctionInAFunction", this?.name);
    };
    nestedFunction();
    arrowFunctionInAFunction();
}

globalFunction();
