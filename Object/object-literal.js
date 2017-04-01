function f(x, y) {
    return {x, y};
}

console.log(f(1, 2));       // { x: 1, y: 2 }


// ----------------------------------------------------

var person = {
    hello(){
        "use strict";
        return 'world';
    }
};

console.log(person.hello());    // world


// ----------------------------------------------------

var cart = {
    _wheels: 4,

    get wheels() {
        "use strict";
        return this._wheels;
    },

    set wheels(value) {
        if (value < this._wheels) {
            throw new Error('too small');
        }
        this._wheels = value;
    }
};

console.log("before: ", cart.wheels);       // 4
cart.wheels = 5;
console.log("after: ", cart.wheels);        // 5


// ----------------------------------------------------

var obj = {};

obj.foo = true;

obj['a' + 'bc'] = false;

console.log(obj);       // { foo: true, abc: false }

var lastWord = 'last word';

var obj2 = {
    'first word': 'hello',
    [lastWord]: 'world',

    ['s' + 'ay'](){
        "use strict";
        return this['first word'] + " " + this[lastWord];
    }
};

console.log(obj2);               // { 'first word': 'hello', 'last word': 'world', say: [Function: say] }
console.log(obj2.say());        // hello world


// ----------------------------------------------------

