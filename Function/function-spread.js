console.log([1, 2, 3]);         // [ 1, 2, 3 ]
console.log(...[1, 2, 3]);      // 1 2 3
console.log(1, ...[2, 3], 4);   // 1 2 3 4


// ----------------------------------------------------

function push(array, ...items) {
    array.push(...items);
    return array;
}

console.log(push([1, 2, 3], 4, 5));         // [ 1, 2, 3, 4, 5 ]

var arr = [1, 2, 3];
arr.push(...[4, 5]);
console.log(arr);                           // [ 1, 2, 3, 4, 5 ]


// ----------------------------------------------------

function add(x, y) {
    return x + y;
}

var numbers = [1, 2];
console.log(add(...numbers));               // 3

console.log(add.apply(null, numbers));      // 3


console.log(Math.max.apply(null, [1, 2, 3]));       // 3
console.log(Math.max(...[1, 2, 3]));                // 3

// ----------------------------------------------------

function readDateFields() {
    "use strict";
    return [2017, 1, 2];
}

var date = new Date(...readDateFields());
console.log(date);              // 2017-02-01T16:00:00.000Z


// ----------------------------------------------------

var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

console.log(arr1.concat(arr2, arr3));           // [ 'a', 'b', 'c', 'd', 'e' ]
console.log([...arr1, ...arr2, ...arr3]);       // [ 'a', 'b', 'c', 'd', 'e' ]


// ----------------------------------------------------

var list = [1, 2, 3, 4];

a = list[0];
rest = list.slice(1);

console.log(a);                     // 1
console.log(rest);                  // [ 2, 3, 4 ]

[a, ...rest] = list;

console.log(a);                     // 1
console.log(rest);                  // [ 2, 3, 4 ]


// ----------------------------------------------------

const [first, ...rest2] = [];

console.log(first);         // undefined
console.log(rest2);         // []

// const [...headers, last] = [1, 2, 3, 4];        // SyntaxError: Rest element must be last element in array


// ----------------------------------------------------

console.log('hello');           // hello
console.log(...'hello');        // h e l l o
console.log([...'hello']);      // [ 'h', 'e', 'l', 'l', 'o' ]


// ----------------------------------------------------

// handle unicode

function length(str) {
    return [...str].length;
}

console.log('\uD83D\uDE80'.length);         // 2
console.log(length('\uD83D\uDE80'));        // 1


// ----------------------------------------------------

let map = new Map([
    [1, 'a'],
    [2, 'b'],
    [3, 'c']
]);

console.log([...map.keys()]);               // [ 1, 2, 3 ]


// ----------------------------------------------------

var go = function *() {
    yield 1;
    yield 2;
    yield 3;
};

console.log([...go()]);                     // [ 1, 2, 3 ]


// ----------------------------------------------------

