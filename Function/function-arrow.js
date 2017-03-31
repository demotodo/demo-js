var generateObj = id => ({id: id, name: 'temp'});

console.log(generateObj(123));          // { id: 123, name: 'temp' }


// ----------------------------------------------------

var fullNameFunc = ({first, last}) => first + " " + last;

console.log(fullNameFunc({first: 'hello', last: 'world'}));         // hello world


function fullNameFunc2(person) {
    return person.first + " " + person.last;
}

console.log(fullNameFunc2({first: 'hello', last: 'world'}));        // hello world


// ----------------------------------------------------

var numbers = (...nums) => nums;

console.log(numbers(1, 2, 3));              // [ 1, 2, 3 ]


var headAndTail = (head, ...tail) => [head, tail];

console.log(headAndTail(1, 2, 3));          // [ 1, [ 2, 3 ] ]


// ----------------------------------------------------

function foo() {
    "use strict";
    setTimeout(() => {
        console.log("id:", this.id);
    });
}

// foo({id: 123});         // TypeError: Cannot read property 'id' of undefined

foo.call({id: 123});        // id: 123


// ----------------------------------------------------

var handler = {
    id: 123,

    init: function () {
        "use strict";
        (() => this.doThing('deafult'))();
    },

    doThing: function (type) {
        console.log("id:", this.id, ", handle type: ", type);
    }
};

handler.init();
// id: 123 , handle type:  deafult


// ----------------------------------------------------

var r = (function () {
    return (() => this.x).bind({x: 'inner'})();
}).call({x: 'outer'});

console.log(r);         // outer


// ----------------------------------------------------

function insert(value) {
    "use strict";
    return {
        into: function (array) {
            return {
                after: function (afterValue) {
                    array.splice(array.indexOf(afterValue) + 1, 0, value);
                    return array;
                }
            };
        }
    };
}

console.log(insert(2).into([1, 3]).after(1));           // [ 1, 2, 3 ]


let insert2 = (value) => ({
    into: (array) => ({
        after: (afterValue) => {
            array.splice(array.indexOf(afterValue) + 1, 0, value);
            return array;
        }
    })
});

console.log(insert2(2).into([1, 3]).after(1));          // [ 1, 2, 3 ]


// ----------------------------------------------------

const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);

const plus1 = a => a + 1;
const mult1 = a => a * 2;

console.log(pipeline(plus1, mult1)(5));     // 12

console.log(mult1(plus1(5)));               // 12


// ----------------------------------------------------

