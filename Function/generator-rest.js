function* numbers() {
    yield 1;
    yield 2;
    return 3;
    yield  4;
}

var n = numbers();

console.log(n.next());      // { value: 1, done: false }
console.log(n.next());      // { value: 2, done: false }
console.log(n.next());      // { value: 3, done: true }
console.log(n.next());      // { value: undefined, done: true }


console.log([...numbers()]);    // [ 1, 2 ]

console.log(Array.from(numbers()));     // [ 1, 2 ]

let [x, y] = numbers();
console.log(x, y);        // 1 2

for (var m of numbers()) {
    console.log(m);
}
// 1
// 2
