function* F() {
    yield this.x = 2;
    yield this.y = 3;
}

var obj = {};
var f = F.bind(obj)();

console.log(f.next());      // { value: 2, done: false }
console.log(f.next());      // { value: 3, done: false }
console.log(f.next());      // { value: undefined, done: true }

console.log(obj);       // { x: 2, y: 3 }
