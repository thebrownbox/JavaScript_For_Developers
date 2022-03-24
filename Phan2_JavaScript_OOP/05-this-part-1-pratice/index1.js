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

//! Example 1: switching function => method


//! Example 2: switching function <= method
