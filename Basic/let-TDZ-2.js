"use strict";

// Temporal Dead Zone (TDZ)

var tmp = 123;

if (true) {
    tmp = "abc";    // ReferenceError

    let tmp;
    console.log(tmp);

    tmp = "ddd";
    console.log(tmp);
}
