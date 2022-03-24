"use strict";
//example 4: nested function
this.name = "GLOBAL";
const x = {
    name: "x",
    someFunction() {
        function f1() {
            console.log("f1", this?.name);
        }

        const f2 = function () {
            console.log("f2", this?.name);
        };

        const f3 = () => {
            console.log("f3", this?.name);
        };

        console.log("someFunction", this?.name);

        f1();
        f2();
        f3();
    },
};

x.someFunction();
