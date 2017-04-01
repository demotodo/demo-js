// for ... in

// Object.keys(obj)

// Object.getOwnPropertyNames(obj)

// Object.getOwnPropertySymbols(obj)

// Reflect.ownKeys(obj)

// Reflect.enumerate(obj)


// ----------------------------------------------------

let obj = {foo: 3};

console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));               // { value: 3, writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor([], 'length'));             // { value: 0, writable: true, enumerable: false, configurable: false }

console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));     // { value: [Function: toString], writable: true, enumerable: false, configurable: true }

console.log(Object.getOwnPropertyDescriptor(class {
    foo() {
    }
}.prototype, 'foo'));                                                   // { value: [Function: foo], writable: true, enumerable: false, configurable: true }


// ----------------------------------------------------

console.log(Reflect.ownKeys({[Symbol()]: 0, b: 0, 10: 0, 2: 0, a: 0})); // [ '2', '10', 'b', 'a', Symbol() ]
