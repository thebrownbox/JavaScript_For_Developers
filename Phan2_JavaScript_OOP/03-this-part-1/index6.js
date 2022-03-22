"use strict";
//example 6: callback function
const x = {
    name: "x",
    arr: [1, 2, 3, 4, 5],
    doSomething1() {
        this.arr.forEach((e) => {
            console.log(this?.name, e);
        });
    },

    doSomething2() {
        this.arr.forEach(function (e) {
            console.log(this?.name, e);
        });
    },

    show(e) {
        console.log(this?.name, e);
    },

    doSomething3() {
        this.arr.forEach(this.show);
    },

    nestedObject: {
        name: "y",
        doOtherThing() {
            const arrow = () => {
                const z = {
                    name: "z",
                    doMoreThing() {
                        const arrow2 = () => {
                            console.log("arrow2", this?.name);
                        };
                        arrow2();
                    },
                };
                z.doMoreThing();
            };
            arrow();
        },
    },
};

x.doSomething1();
x.doSomething2();
x.doSomething3();
x.nestedObject.doOtherThing();
