let s1 = Symbol('foo');
let s2 = Symbol('foo');

console.log(s1);                // Symbol(foo)
console.log(s2);                // Symbol(foo)
console.log(s1 === s2);         // false


// ----------------------------------------------------

let s3 = Symbol('bar');
let s4 = Symbol.for('bar');
let s5 = Symbol.for('bar');

console.log(s3 === s4);         // false
console.log(s3 === s5);         // false
console.log(s4 === s5);         // true     **

console.log(Symbol.keyFor(s3));     // undefined
console.log(Symbol.keyFor(s4));     // bar
console.log(Symbol.keyFor(s5));     // bar


// ----------------------------------------------------

console.log(String(s1));        // Symbol(foo)

console.log(Boolean(s1));       // true


// ----------------------------------------------------

var a = {};
a[s1] = 'hello';

console.log(a);                     // {}
console.log(Reflect.ownKeys(a));    // [ Symbol(foo) ]


var b = {
    [s1]: 'hello'
};

console.log(b);                     // {}
console.log(Reflect.ownKeys(b));    // [ Symbol(foo) ]


var c = {};
Object.defineProperty(c, s1, {value: 'hello'});

console.log(c);                     // {}
console.log(Reflect.ownKeys(c));    // [ Symbol(foo) ]


var d = {
    [s1](){
        "use strict";
        return 'in d func';
    }
};

console.log(d[s1]());               // in d func

// ----------------------------------------------------

var levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
};

function log(level, message) {
    switch (level) {
        case levels.DEBUG:
            console.log('D', message);
            break;

        case levels.INFO:
            console.log('I', message);
            break;

        case levels.WARN:
            console.log('W', message);
            break;
    }
};

log(levels.INFO, 'msg');            // I msg


// ----------------------------------------------------

