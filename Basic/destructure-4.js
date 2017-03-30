"use strict";

const [a, b, c, d, e] = 'hello';
console.log(a);     // h
console.log(b);     // e
console.log(c);     // l
console.log(d);     // l
console.log(e);     // o


// ----------------------------------------------------

let {length: len} = 'hello';
console.log(len);   // 5


// ----------------------------------------------------

let {toString: s1} = 123;
console.log(s1 === Number.prototype.toString);      // true


// ----------------------------------------------------

let {toString: s2} = true;
console.log(s2 === Boolean.prototype.toString);     // true
