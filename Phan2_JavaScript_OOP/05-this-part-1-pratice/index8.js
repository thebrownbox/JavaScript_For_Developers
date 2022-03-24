"use strict";

//! Example 9: callback in a object

this.name = "GLOBAL";

const x = {
    name: "x",
    arr: [1, 2, 3],

    arrowFunction: (e) => {
        console.log(e, this?.name);
    },

    method() {
        this.arr.forEach(function myFunction(e) {
            console.log(e, this?.name);
        });

        this.arr.forEach(this.arrowFunction);

        this.arr.forEach((e) => {
            console.log(e, this?.name);
        });
    },
};

x.method();
//? Best practice 2
