console.log(Object.is('foo', 'foo'));       // true

console.log(Object.is({}, {}));             // false
console.log({} === {});                     // false

console.log(Object.is(+0, -0));             // false
console.log(+0 === -0);                     // true

console.log(Object.is(NaN, NaN));           // true
console.log(NaN === NaN);                   // false
