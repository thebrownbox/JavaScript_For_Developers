"use strict";

//! Example 9: callback in a object

this.name = "GLOBAL";

const x = {
    name: "x",
    arr: [1, 2, 3],

    showArray() {
        console.log(this.arr);
    },

    arrowFunction: (e) => {
        console.log(e, this.name);
    },

    normalFunction(e) {
        console.log(e, this?.name);
    },

    showArrayWithName() {
        this.arr.forEach((e) => {
            console.log(e, this.name);
        });

        // this.arr.forEach(arrowFunction);
        // this.arr.forEach(this.normalFunction);
        // this.arr.forEach(function (e) {
        //     console.log(e, this?.name);
        // });
    },
};

x.showArray();
x.showArrayWithName();

//? Best practice 2
