"use strict";
//example 1: global function
//!Only work with Browser Env

function f1() {
    console.log("f1", this);
}

f1();
this.f1();
