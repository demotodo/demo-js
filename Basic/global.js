"use strict";

var a = 1;
console.log(window.a);      // should run in browser
console.log(this.a);        // should run in browser


let b = 2;
console.log(b);
console.log(window.b);      // should run in browser
