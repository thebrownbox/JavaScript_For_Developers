"use strict";
//! Example 7: nested functions in method

this.name = "GLOBAL";

const x = {
    name: "x",
    method() {
        const functionInAMethod = function () {
            console.log("functionInAMethod", this?.name);
        };

        const arrowFunctionInAMethod = () => {
            console.log("arrowFunctionInAMethod", this?.name);
        };

        functionInAMethod();
        arrowFunctionInAMethod();
    },
};

x.method();
