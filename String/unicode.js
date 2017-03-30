console.log("\uD842\uDFB7");
console.log("\u{20BB7}");

let hello = 123;
// console.log(hell\u{6F});     // 123


// ----------------------------------------------------

var s = "𠮷";

console.log(s);
console.log(s.length);      // 2

console.log(s.charAt(0), s.charAt(1));

console.log(s.charCodeAt(0).toString(16), s.charCodeAt(1).toString(16));    // d842 dfb7

console.log(s.codePointAt(0).toString(16), s.codePointAt(1).toString(16));    // 20bb7 dfb7


// ----------------------------------------------------
// for..of can distinguish unicode character

for (let ch of s) {
    console.log(ch.codePointAt(0).toString(16));
}

// only output 20bb7


// ----------------------------------------------------

function is32Bit(c) {
    "use strict";
    return c.codePointAt(0) > 0xFFFF;
}

console.log(is32Bit(s));        // true
console.log(is32Bit('a'));      // false


// ----------------------------------------------------

console.log(String.fromCodePoint(0x20BB7));

// console.log(s.at(0));    // ES7 feature


// ----------------------------------------------------

console.log('\u01D1'.normalize() === '\u004F\u030C'.normalize());       // true


// ----------------------------------------------------

