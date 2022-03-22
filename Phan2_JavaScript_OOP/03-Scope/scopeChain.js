"use strict";

const name = "GLOBAL";

function doSomething() {
    const name = "LOCAL";
    const age = 10;
    if (age === 10) {
        const name = "BLOCK";
        console.log({ name });
    }
}

doSomething();
