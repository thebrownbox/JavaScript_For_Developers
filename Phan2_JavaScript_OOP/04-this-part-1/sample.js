"use strict";

this.name = "GLOBAL";

function normalFunction() {
    console.log("normalFunction", this?.name);
}

const arrowFunction = () => {
    console.log("arrowFunction", this?.name);
};

const x = {
    name: "x",
    method() {
        console.log("method", this?.name);
    },
};

normalFunction();
arrowFunction();
x.method();
