"use strict";

function add([x, y]) {
    return x + y;
}

console.log(add([1, 2]));   // 3


// ----------------------------------------------------

[[1, 2], [3, 4]].map(([a, b])=> a + b)
    .forEach(r => console.log(r));      // 3, 7


// ----------------------------------------------------

function move({x = 0, y = 0} = {}) {
    return [x, y];
}

console.log(move());                // [0, 0]
console.log(move({x: 3}));          // [3, 0]
console.log(move({x: 3, y: 4}));    // [3, 4]


// ----------------------------------------------------

function move2({x, y} = {x: 0, y: 0}) {
    return [x, y];
}

console.log(move2());                // [0, 0]
console.log(move2({x: 3}));          // [3, undefined]
console.log(move2({x: 3, y: 4}));    // [3, 4]


// ----------------------------------------------------

[1, undefined, 3].map((x = 'yes') => x)
    .forEach(y => console.log(y));      // 1, yes, 3


