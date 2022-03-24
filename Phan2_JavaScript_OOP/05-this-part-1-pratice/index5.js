"use strict";
//! Example 7: nested functions in method

this.name = "GLOBAL";

const x = {
    name: "x",
    method() {
        console.log("method", this?.name);

        const normalFunction = function () {
            console.log("normalFunction", this?.name);
        };

        const arrowFunction = () => {
            console.log("arrowFunction", this?.name);
        };

        normalFunction();
        arrowFunction();
    },
};

x.method();
