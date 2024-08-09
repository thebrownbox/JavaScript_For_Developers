"use strict";

const myName = "GLOBAL";

function doSomething() {
    const myName = "LOCAL";
    const age = 10;
    if (age === 10) {
        const myName = "BLOCK";
        console.log(myName);
    }
}

doSomething();
