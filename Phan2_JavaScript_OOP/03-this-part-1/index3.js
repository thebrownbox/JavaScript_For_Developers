"use strict";
//example 3: function & arrow function in method
const y = {
    doSomething() {
        function helperFunction() {
            console.log("helperFunction", this);
        }
        const helperArrowFunction = () => {
            console.log("helperArrowFunction", this);
        };
        console.log("doSomething", this);
        helperFunction();
        helperArrowFunction();
    },
};

y.doSomething();
