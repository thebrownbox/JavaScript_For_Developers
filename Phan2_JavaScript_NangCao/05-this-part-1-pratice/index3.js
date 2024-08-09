"use strict";

this.name = "GLOBAL";

const x = {
    name: "x",
    method() {
        console.log("method", this?.name);
    },
};

//! example 5: Method is attached to another object
const y = {
    name: "y",
};

y.method = x.method;

x.method();
y.method();
