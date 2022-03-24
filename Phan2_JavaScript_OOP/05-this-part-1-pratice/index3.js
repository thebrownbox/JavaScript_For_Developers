"use strict";

this.name = "GLOBAL";

const x = {
    name: "x",
    method(){
        console.log("method", this?.name);
    }
};

const y = {
    name: "y"
}

//! example 5: Method is attached to another object
y.borrowMethod = x.method;

x.method();
y.borrowMethod();