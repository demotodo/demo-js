var foo = 1;
var bar = 2;

var s = `foo is ${foo}, bar is ${bar}`;

console.log(s);     // foo is 1, bar is 2


// ----------------------------------------------------

console.log(`there are multiple lines
    of text,
    and reserve the leading blanks`);
// there are multiple lines
//     of text,
//     and reserve the leading blanks


// ----------------------------------------------------

console.log(`after addition: ${foo + bar}`);    // after addition: 3


// ----------------------------------------------------

function f() {
    "use strict";
    return "world";
}

console.log(`can call function: hello ${f()}`);     // can call function: hello world


// ----------------------------------------------------

console.log(`string parameter: ${'hello world'}`);  // string parameter: hello world


// ----------------------------------------------------

let obj = {
    x: 1,
    toString: function () {
        return "x/" + this.x;
    }
};
console.log(`object parameter: ${obj}`);        // object parameter: x/1


// ----------------------------------------------------

let str = 'return ' + '`Hello ${name}`';
let func = new Function('name', str);

console.log(func('Jack'));      // Hello Jack

