"use strict";

this.name = "GLOBAL";

const x = {
    name: "x",
    normalMethod() {
        console.log("normalMethod", this?.name);
    },
    arrowMethod: () => {
        console.log("arrowMethod", this?.name);
    },
};

x.normalMethod();

//! Example 3: Arrow Method
x.arrowMethod();

//? Best practice 1

//! Example 4: Arrow Method => function
const otherFunction = x.arrowMethod;
otherFunction();
