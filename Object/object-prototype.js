var firstObject = {
    doThing(){
        "use strict";
        console.log('in first object');
    }
};

var secondObj = Object.create(firstObject);

secondObj.doThing();            // in first object


// ----------------------------------------------------

let proto = {};

let obj = {x: 10};

Object.setPrototypeOf(obj, proto);

proto.y = 20;

console.log(obj.y);                         // 20

console.log(obj.prototype);                 // undefined

console.log(Object.getPrototypeOf(obj));    // { y: 20 }


// ----------------------------------------------------

function Rectangle() {
}

var rec = new Rectangle();

console.log(Rectangle.prototype);                                   // Rectangle {}

console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);    // true

Rectangle.prototype.x = 30;

console.log(rec.x);                 // 30


// ----------------------------------------------------

