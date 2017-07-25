var f = function*() {
    while (true) {
        try {
            yield;
        } catch (e) {
            if (e != 'a') throw e;
            console.log('caught inside', e);
        }
    }
}

var g = f();

g.next();

try {
    g.throw('a');
    g.throw('b');
} catch (e) {
    console.log('caught outside', e);
}

// caught inside a
// caught outside b


// ----------------------------------------------------
function* foo() {
    yield 1;

    console.log('throw an exception');
    throw new Error('generator broke')

    yield 2;
    yield 3;
}

function log(generator) {
    var v;
    console.log('start generator');

    try {
        v = generator.next();
        console.log('first time', v);
    } catch (err) {
        console.log('error caught', v);
    }

    try {
        v = generator.next();
        console.log('second time', v);
    } catch (err) {
        console.log('error caught', v);
    }

    try {
        v = generator.next();
        console.log('third time', v);
    } catch (err) {
        console.log('error caught', v);
    }
}

log(foo());
// start generator
// first time { value: 1, done: false }
// throw an exception
// error caught { value: 1, done: false }
// third time { value: undefined, done: true }
