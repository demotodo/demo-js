"use strict";

function timeout(ms) {
    return new Promise((resolve, reject)=> {
        setTimeout(resolve, ms, 'done');
    })
}

timeout(100).then((value)=> {
    console.log(value);         // done
});


// ----------------------------------------------------

let p1 = new Promise((resolve, reject) => {
    console.log('in p1');
    setTimeout(()=>reject(new Error('fail')), 3000);
});

let p2 = new Promise((resolve, reject) => {
    console.log('in p2');
    setTimeout(()=>resolve(p1), 1000);
});

p2.then(result => console.log('result', result))
    .catch(error => console.log('error', error));

// in p1
// in p2
// error Error: fail

