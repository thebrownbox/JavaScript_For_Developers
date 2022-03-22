"use strict";
//example 1: global function
//!Only work with Browser Env
this.name = "GLOBAL";
function aFunction() {
    console.log("aFunction", this?.name);
}

const x = {
    name: "x",
    method() {
        console.log("method", this?.name);
    },
};

aFunction();
x.method();

x.aFunction = aFunction;
x.aFunction();

const aMethod = x.method;
aMethod();
