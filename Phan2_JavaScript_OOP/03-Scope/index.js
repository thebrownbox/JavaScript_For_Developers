"use strict";

const globalVariable = 100;

function globalFunction() {
    const localVariable = 99;

    function localFunction() {
        if (globalVariable === 100) {
            const blockVariable = localVariable * 2;
            console.log({ blockVariable });
        }
    }
}
