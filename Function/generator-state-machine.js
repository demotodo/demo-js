var ticking = true;
var clock = function () {
    if (ticking) {
        console.log('Tick');
    } else {
        console.log('Tock');
    }
    ticking = !ticking;
}

for (var i = 0; i < 10; i++) {
    clock();
}


var clock2 = function*() {
    while (true) {
        yield;
        console.log('Tick');

        yield;
        console.log('Tock');
    }
}

var c2 = clock2();
for (var i = 0; i < 10; i++) {
    c2.next();
}
