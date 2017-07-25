function* inner() {
    yield 'hello';
}

function* outer() {
    yield 'open';
    yield* inner();
    yield 'close';
}

for (let v of outer()) {
    console.log(v);
}
// open
// hello
// close


// ----------------------------------------------------

function* arrgen() {
    yield* ["a", "b", "c"];
}

for (let a of arrgen()) {
    console.log(a);
}
// a
// b
// c


// ----------------------------------------------------

function* genFunctionWithReturn() {
    yield 'a';
    yield 'b';
    return 'The result';
    // yield 'The result';
}

function* logReturned(genObj) {
    let result = yield* genObj;
    console.log('--', result);
}

console.log([...logReturned(genFunctionWithReturn())]);
// -- The result
// [ 'a', 'b' ]


// ----------------------------------------------------

