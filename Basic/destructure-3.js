"use strict";

var {foo, bar, zoo} = {foo: 1, bar: 2};

console.log(foo);   // 1
console.log(bar);   // 2
console.log(zoo);   // undefined


// ----------------------------------------------------

let obj = {first: 'hello', last: 'world'};

let {first:f, last:l} = obj;

console.log(f);     // hello
console.log(l);     // world


// ----------------------------------------------------

let g;
({g} = {g: 1});

console.log(g);     // 1


// ----------------------------------------------------

var obj2 = {
    p: ["hello",
        {y: "world"}
    ]
};

var {p: [x, {y}]} = obj2;

console.log(x);     // hello
console.log(y);     // world


// ----------------------------------------------------

let obj3 = {};
let arr = [];

({foo: obj3.prop, bar: arr[0]} = {foo: 123, bar: true});

console.log(obj3);  // { prop: 123 }
console.log(arr);   // [ true ]


// ----------------------------------------------------

var {x, y = 2} = {x: 4};

console.log(x);     // 4
console.log(y);     // 2

