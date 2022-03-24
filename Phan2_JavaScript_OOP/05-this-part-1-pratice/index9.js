"use strict";

//! Example 10: object in a object

this.name = "GLOBAL";

const x = {
    name: "x",
    methodX() {
        console.log("methodX", this?.name);
        const y = {
            name: "y",
            methodY() {
                console.log("methodY", this?.name);
            },
            arrowMethodY: () => {
                console.log("arrowMethodY", this?.name);
            },
        };

        y.methodY();
        y.arrowMethodY();
    },
};

x.methodX();
//? => Best Practice 1
