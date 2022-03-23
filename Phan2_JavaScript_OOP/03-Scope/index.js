"use strict";

const globalVariable = 99;

function globalFunction() {
    const localVariable = 99;
    console.log("globalFunction");

    function localFunction() {
        if (globalVariable === 100) {
            const blockVariable = localVariable * 2;
            console.log({ blockVariable });
        }
    }
}
