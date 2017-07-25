"use strict";

var promise = new Promise((resolve, reject) => {
    throw new Error("test");
});

promise.then(result => console.log('result', result))
    .catch(error => console.log('error', error.message));
// error Error: test


// ----------------------------------------------------

var promise2 = new Promise((resolve, reject) => {
    resolve('ok');
    throw new Error("test");
});

promise2.then(result => console.log('result-2', result))
    .catch(error => console.log('error-2', error.message));
// result-2 ok


// ----------------------------------------------------

var promise3 = new Promise((resolve, reject) => {
    resolve(x + 2);
});

promise3.then(result => console.log('result-3', result))
    .catch(error => {
        console.log('error-3', error.message);
        y + 2;
    }).then(result => console.log('result-4', result))
    .catch(error => {
        console.log('error-4', error.message);
    });
// error-3 ReferenceError: x is not defined
// error-4 ReferenceError: y is not defined
