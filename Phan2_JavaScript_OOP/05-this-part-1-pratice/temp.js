"use strict";

this.name = "GLOBAL";

const x = {
    name: "x",
    method() {
        console.log("method", this?.name);

        const score = 10;
        if (score === 10) {
            const arrow = () => {
                console.log("arrow", this?.name);
            };
            arrow();
        }
    },
};

x.method();
