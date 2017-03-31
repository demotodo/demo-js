console.log(0b1000 === 8);      // true

console.log(0o11 === 9);        // true

console.log(Number('0b1000'));  // 8


// ----------------------------------------------------

console.log(Number.EPSILON);


// ----------------------------------------------------

console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));     // true

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 3 - 5));     // true

console.log(Number.isSafeInteger(9007199254740994));        // false

console.log(9007199254740991 === 9007199254740994);         // false
console.log(9007199254740993 === 9007199254740994);         // false
console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1);       // true *****

console.log(Number.isSafeInteger(9007199254740994 - 5));    // true


// ----------------------------------------------------

// console.log(2 ** 3);     // ES7
