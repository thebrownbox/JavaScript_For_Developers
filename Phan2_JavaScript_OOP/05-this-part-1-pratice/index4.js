"use strict";
//! Example 6: nested functions
this.name = "GLOBAL";

function globalFunction() {
    const normalFunction = function () {
        console.log("normalFunction", this?.name);
    };

    const arrowFunction = () => {
        console.log("arrowFunction", this?.name);
    };

    normalFunction();
    arrowFunction();
}

globalFunction();
