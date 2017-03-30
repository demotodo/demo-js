"use strict";

var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj)
        .forEach((key, value)=> {
            if (typeof obj[key] === 'object') {
                constantize(obj[key]);
            }
        });
};


const foo = Object.freeze({"o": {}});

foo.o.prop = 123;
console.log(foo.o.prop);


const bar = constantize({"o": {}});

bar.o.prop = 123;       // TypeError
