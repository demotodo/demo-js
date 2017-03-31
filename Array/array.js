let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5
var arr1 = [].slice.call(arrayLike);
console.log(arr1);      // [ 'a', 'b', 'c' ]

// ES6
let arr2 = Array.from(arrayLike);
console.log(arr2);      // [ 'a', 'b', 'c' ]


// ----------------------------------------------------

let arr3 = Array.from('hello');
console.log(arr3);      // [ 'h', 'e', 'l', 'l', 'o' ]

let nameSet = new Set(['a', 'b']);
console.log(nameSet);                   // Set { 'a', 'b' }
console.log(Array.from(nameSet));       // [ 'a', 'b' ]


// ----------------------------------------------------

console.log(Array.from({length: 3}));   // [ undefined, undefined, undefined ]


// ----------------------------------------------------

console.log(Array.from([1, 2, 3], x=>x * x));       // [ 1, 4, 9 ]

console.log(Array.from([1, 2, 3]).map(x=>x * x));   // [ 1, 4, 9 ]

console.log(Array.from({length: 3}, ()=> 'hello')); // [ 'hello', 'hello', 'hello' ]

// ----------------------------------------------------

console.log(new Array());           // []

console.log(new Array(3));          // [ , ,  ]     ****

console.log(new Array(3, 2));       // [ 3, 2 ]

console.log(Array.of());            // []

console.log(Array.of(3));           // [ 3 ]

console.log(Array.of(3, 2));        // [ 3, 2 ]


// ----------------------------------------------------
