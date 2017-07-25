function getFoo() {
    return new Promise(resolve => resolve('foo'));
}

var g = function*() {
    try {
        var foo = yield getFoo();
        console.log(foo);
    } catch (e) {
        console.log(e.message);
    }
};

function run(generator) {
    var it = generator();

    function go(result) {
        if (result.done)
            return result.value;

        return result.value.then(
            value => go(it.next(value)),
            error => go(it.throw(error))
        );
    }

    go(it.next());
}

run(g);
// foo
