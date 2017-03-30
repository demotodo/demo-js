var s = "aaa_aa_a";

var r1 = /a+/g;
var r2 = /a+/y;

console.log(r1.exec(s));    // [ 'aaa', index: 0, input: 'aaa_aa_a' ]
console.log(r2.exec(s));    // [ 'aaa', index: 0, input: 'aaa_aa_a' ]

console.log(r1.lastIndex);  // 3
console.log(r2.lastIndex);  // 3

console.log(r1.exec(s));    // [ 'aa', index: 4, input: 'aaa_aa_a' ]
console.log(r2.exec(s));    // null

console.log(r1.lastIndex);  // 6
console.log(r2.lastIndex);  // 0

r2.lastIndex = 4;
console.log(r2.exec(s));    // [ 'aa', index: 4, input: 'aaa_aa_a' ]


// ----------------------------------------------------

console.log('x##'.split(/#/y));     // [ 'x##' ]

console.log('##x'.split(/#/y));     // [ '', '', 'x' ]

console.log('#x#'.split(/#/y));     // [ '', 'x#' ]


// ----------------------------------------------------

console.log('aaxa'.replace(/a/gy, '-'));    // --xa


// ----------------------------------------------------

