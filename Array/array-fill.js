console.log(['a', 'b', 'c'].fill(7));       // [ 7, 7, 7 ]

console.log(new Array(3).fill(7));          // [ 7, 7, 7 ]

console.log(['a', 'b', 'c'].fill(7, 1, 2));     // [ 'a', 7, 'c' ]
console.log(['a', 'b', 'c'].fill(7, 1, 3));     // [ 'a', 7, 7 ]
console.log(['a', 'b', 'c'].fill(7, 1, 4));     // [ 'a', 7, 7 ]
