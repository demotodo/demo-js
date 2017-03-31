
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));          // [ 4, 5, 3, 4, 5 ]

console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1));     // [ 4, 2, 3, 4, 5 ]

var i32a = new Int32Array([1, 2, 3, 4, 5]);
console.log(i32a.copyWithin(0, 2));                     // Int32Array [ 3, 4, 5, 4, 5 ]


// ----------------------------------------------------
