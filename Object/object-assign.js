var target = {a: 1, b: 1};
var source1 = {b: 2, c: 2};
var source2 = {c: 3, d: 3};

Object.assign(target, source1, source2);
console.log(target);                                        // { a: 1, b: 2, c: 3, d: 3 }

target = {a: 1, b: 1};
console.log(target);
console.log(Object.assign(target, source1, source2));       // { a: 1, b: 2, c: 3, d: 3 }

target = {a: 1, b: 1};
console.log(target);
console.log(Object.assign({}, target, source1, source2));   // { a: 1, b: 2, c: 3, d: 3 }
console.log(target);                                        // { a: 1, b: 1 }


// ----------------------------------------------------

var s = Object.defineProperty({}, 'invisible', {
    enumerable: false,
    value: 'hello'
});

console.log(s);                                     // {}
console.log(Object.assign({b: 'c'}, s));            // { b: 'c' }


// ----------------------------------------------------

console.log(Object.assign({a: 'b'}, {[Symbol('c')]: 'd'}));         // { a: 'b' }


// ----------------------------------------------------

var t = {a: {b: 'c', d: 'e'}};
var s2 = {a: {b: 'hello'}};

console.log(Object.assign(t, s2));                  // { a: { b: 'hello' } }            *** replaced


// ----------------------------------------------------

console.log(Object.assign([1, 2, 3], [4, 5]));      // [ 4, 5, 3 ]


// ----------------------------------------------------
// add properties

class Point {
    constructor(x, y) {
        Object.assign(this, {x, y});
    }
}

console.log(new Point(1, 2));                       // Point { x: 1, y: 2 }


// ----------------------------------------------------
// add functions

// Object.assign(SomeClass.prototype, {
//     fun2(x){
//         "use strict";
//         return x;
//     }
// });


// ----------------------------------------------------
// clone (not deep)

function clone(origin) {
    return Object.assign({}, origin);
}


// ----------------------------------------------------
// merge objects

const merge = (target, ...sources) => Object.assign(target, ...sources);

const merge2 = (...sources) => Object.assign({}, ...sources);


// ----------------------------------------------------
// assign defaults

const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
};

function process(options) {
    options = Object.assign({}, DEFAULTS, options);
}

// ----------------------------------------------------

