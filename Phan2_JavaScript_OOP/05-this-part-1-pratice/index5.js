"use strict";
//example 5: callback function
this.name = "GLOBAL";
const x = {
    name: "x",
    doSomethingWhenDone(info, f) {
        console.log("doSomethingWhenDone - " + info, this?.name);
        f();
    },
    f3() {
        console.log("f3", this?.name);
    },
};

x.doSomethingWhenDone("f1", function () {
    console.log("f1", this?.name);
});

x.doSomethingWhenDone("f2", () => {
    console.log("f2", this?.name);
});

x.doSomethingWhenDone("f3", x.f3);
