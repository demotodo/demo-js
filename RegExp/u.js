console.log(/\uD83D/.test('\uD83D\uDC2A'));     // true
console.log(/\uD83D/u.test('\uD83D\uDC2A'));    // false


// ----------------------------------------------------

var s = "𠮷";

console.log(/^.$/.test(s));     // false
console.log(/^.$/u.test(s));    // true


// ----------------------------------------------------

console.log(/𠮷{2}/.test('𠮷𠮷'));      // false
console.log(/𠮷{2}/u.test('𠮷𠮷'));     // true


// ----------------------------------------------------

console.log(/^\S$/.test(s));    // false
console.log(/^\S$/u.test(s));   // true


// ----------------------------------------------------

function codePointLength(text) {
    var result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
}

console.log(s.length, codePointLength(s));  // 2 1


// ----------------------------------------------------

console.log('\u212A');
console.log(/[a-z]/i.test('\u212A'));       // false
console.log(/[a-z]/iu.test('\u212A'));      // true
