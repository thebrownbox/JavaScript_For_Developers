"use strict";
//example 2: function declaration & function expression
this.name = "GLOBAL";
const x = {
    name: "x",
    normalFunction() {
        console.log("normalFunction", this?.name);
    },

    functionExpression: function () {
        console.log("functionExpression", this?.name);
    },
};

x.normalFunction();
x.functionExpression();

const functionPointer = x.normalFunction;
functionPointer();

const functionExpressionPointer = x.functionExpression;
functionExpressionPointer();
