function add(...values) {
    let sum = 0;

    for (var val of values) {
        sum += val;
    }

    return sum;
}

console.log(add(1, 2, 3));    // 6


// ----------------------------------------------------

function sort1() {
    return Array.prototype.slice.call(arguments).sort();
}

function sort2(...numbers) {
    return numbers.sort();
}

console.log(sort1(3, 2, 1));    // [ 1, 2, 3 ]
console.log(sort2(3, 2, 1));    // [ 1, 2, 3 ]


// ----------------------------------------------------

