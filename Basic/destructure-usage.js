"use strict";

let x = 1;
let y = 2;

[x, y] = [y, x];

console.log(x);     // 2
console.log(y);     // 1


// ----------------------------------------------------

function foo() {
    return [1, 2, 3];
}

var [a, b, c] = foo();

console.log(a);     // 1
console.log(b);     // 2
console.log(c);     // 3


// ----------------------------------------------------

function bar() {
    return {
        m: 1,
        n: 2
    };
}

var {m, n} = bar();

console.log(m);     // 1
console.log(n);     // 2


// ----------------------------------------------------

function cat([x, y, z]) {
    console.log(x, y, z);
}

cat([1, 2, 3]);     // 1 2 3


function dog({x, y, z}) {
    console.log(x, y, z);
}

dog({x: 1, z: 3, y: 2});    // 1 2 3


// ----------------------------------------------------

var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};

let {id, status, data: number} = jsonData;

console.log(id, status, number);    // 42 'OK' [ 867, 5309 ]


// ----------------------------------------------------

var map = new Map();
map.set("first", "hello");
map.set("second", "world");

for (let [key,value] of map) {
    console.log(key + "=" + value);
}
// first=hello
// second=world

for (let [key] of map) {
    console.log("key: " + key);
}
// key: first
// key: second

for (let [,value] of map) {
    console.log("value: " + value);
}
// value: hello
// value: world

