"use strict";

var b = [];
for (var j = 0; j < 10; j++) {
    b[j] = function () {
        console.log(j);
    }
}

b[6]();


var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}

a[6]();
