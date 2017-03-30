"use strict";

var [foo = true] =[];
console.log(foo);   // true

// ----------------------------------------------------

var [x, y = 'b'] = ['a'];
console.log(x);     // a
console.log(y);     // b

// ----------------------------------------------------

[x, y = 'c'] = ['a', undefined];
console.log(x);     // a
console.log(y);     // c

// ----------------------------------------------------

[x, y = 'd'] = ['a', null];
console.log(x);     // a
console.log(y);     // null

// ----------------------------------------------------

function f1() {
    console.log("in f1");
}

[x = f1()] = ['a'];
console.log(x);     // a

// ----------------------------------------------------

function f2() {
    console.log("in f2");
}

[x = f2()] = [];
console.log(x);     // undefined, also executed f2

// ----------------------------------------------------

[x = 1, y = x] = [3];
console.log(x);     // 3
console.log(y);     // 3

[x = 1, y = x] = [3, 4];
console.log(x);     // 3
console.log(y);     // 4
