"use strict";
const GLOBALs = this;
console.log("this", this);

function f1() {
    console.log("f1", this);
}
const f2 = function () {
    console.log("f2", this);
};
const f3 = () => {
    console.log("f3", this);
};

f1();
f2();
f3();
this.f1();
console.log(this);
const x = {
    f() {
        console.log("xx");
    },
};
