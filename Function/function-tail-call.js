// recursive function

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));              // 120


// ----------------------------------------------------

// redefine function interface

function tailFactorial(n, total) {
    "use strict";
    if (n === 1) {
        return total;
    }
    return tailFactorial(n - 1, n * total);
}

console.log(tailFactorial(5, 1));       // 120

function factorial2(n) {
    return tailFactorial(n, 1);
}

console.log(factorial2(5));             // 120


// ----------------------------------------------------

// currying in function programming

function currying(fn, n) {
    return function (m) {
        return fn.call(this, m, n);
    }
}

const factorial3 = currying(tailFactorial, 1);

console.log(factorial3(5));             // 120


// ----------------------------------------------------

// use default parameter value

function factorial4(n, total = 1) {
    if (n === 1) {
        return total;
    }
    return factorial4(n - 1, n * total);
}

console.log(factorial4(5));             // 120


// ----------------------------------------------------
