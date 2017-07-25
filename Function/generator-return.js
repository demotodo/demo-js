function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

var g = gen();

console.log(g.next());      // { value: 1, done: false }
console.log(g.next());      // { value: 2, done: false }
console.log(g.next());      // { value: 3, done: false }
console.log(g.next());      // { value: undefined, done: true }


var g2 = gen();
console.log(g.next());      // { value: 1, done: false }
console.log(g.return(7));   // { value: 7, done: true }
console.log(g.next());      // { value: undefined, done: true }
console.log(g.next());      // { value: undefined, done: true }


// ----------------------------------------------------

function* bar() {
    yield 1;
    try {
        yield 2;
        yield 3;
    } finally {
        yield 4;
        yield 5;
    }
    yield 6;
}

var b = bar();

console.log(b.next());      // { value: 1, done: false }
console.log(b.next());      // { value: 2, done: false }
console.log(b.return(7));   // { value: 4, done: false }
console.log(b.next());      // { value: 5, done: false }
console.log(b.next());      // { value: 7, done: true }
console.log(b.next());      // { value: undefined, done: true }
