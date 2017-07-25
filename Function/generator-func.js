'use strict';

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

let hw = helloWorldGenerator();

console.log(hw.next());     // { value: 'hello', done: false }

console.log(hw.next());     // { value: 'world', done: false }

console.log(hw.next());     // { value: 'ending', done: true }

console.log(hw.next());     // { value: undefined, done: true }


// ----------------------------------------------------

let arr = [1, [[2, 3], 4], [5, 6]];

let flag = function*(a) {
    for (let i = 0; i < a.length; i++) {
        if (typeof a[i] !== 'number') {
            yield* flag(a[i]);
        } else {
            yield a[i];
        }
    }
};

for (let f of flag(arr)) {
    console.log(f);
}
// 1 2 3 4 5 6


// ----------------------------------------------------

let f = (function *() {
    console.log('hello ' + (yield 123));
})();

console.log(f.next());
// { value: 123, done: false }

console.log(f.next());
// hello undefined
// { value: undefined, done: true }

console.log(f.next());
// { value: undefined, done: true }


// ----------------------------------------------------

let f2 = (function*() {
    for (let i = 0; true; i++) {
        var reset = yield i;
        if (reset) {
            i = -1;
        }
    }
})();

console.log(f2.next());     // { value: 0, done: false }

console.log(f2.next());     // { value: 1, done: false }

console.log(f2.next(true)); // { value: 0, done: false }

console.log(f2.next());     // { value: 1, done: false }


// ----------------------------------------------------

function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var a = foo(5);
console.log(a.next());      // { value: 6, done: false }
console.log(a.next());      // { value: NaN, done: false }
console.log(a.next());      // { value: NaN, done: true }

var b = foo(5);
console.log(b.next());      // { value: 6, done: false }
console.log(b.next(12));    // { value: 8, done: false }
console.log(b.next(13));    // { value: 42, done: false }
