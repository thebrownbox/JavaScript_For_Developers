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
    methodArrow: () => {
        console.log("methodArrow", this?.name);
    },
};

aFunction();
x.method();
x.methodArrow();

x.aFunction = aFunction;
x.aFunction();

const aMethod = x.method;
aMethod();

const y = {
    name: "y",
};
y.method = aMethod;
y.method();
