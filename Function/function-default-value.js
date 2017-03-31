function log(x, y) {
    y = y || 'world';
    console.log(x, y);
}

log('hello');               // hello world
log('hello', 'China');      // hello China
log('hello', '');           // hello world   ***  since empty string ==> false


function log2(x, y = 'world') {
    console.log(x, y);
}

log2('hello');               // hello world
log2('hello', 'China');      // hello China
log2('hello', '');           // hello         ***


// ----------------------------------------------------

function fetch(url, {body = '', method = 'GET'}) {
    console.log(method, body);
}

fetch('http://exmaple.com', {});                                    // GET
fetch('http://exmaple.com', {method: 'POST'});                      // POST
fetch('http://exmaple.com', {method: 'POST', body: 'xxx'});         // POST xxx

// fetch('http://exmaple.com');    // TypeError: Cannot match against 'undefined' or 'null'.


function fetch2(url, {body = '', method = 'GET'} = {}) {
    console.log(method, body);
}

fetch2('http://exmaple.com');                                       // GET


// ----------------------------------------------------

var x = 1;

function f(x, y = x) {
    console.log(y);
}

f(2);   // 2


var b = 1;

function g(a = b) {
    let b = 2;
    console.log(a);
}

g();    // 1


// ----------------------------------------------------

let bar = 'outer';

function foo(func = ()=> bar) {
    let bar = 'inner';
    console.log(func());
}

foo();  // outer


function foo2(func = ()=> zoo) {
    let zoo = 'inner';
    console.log(func());
}

// foo2();     // ReferenceError: zoo is not defined


// ----------------------------------------------------

function throwIfMissing() {
    throw new Error('Missing parameter');
}

function fun(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}

// fun();      // Error: Missing parameter


// ----------------------------------------------------

function fun2(optional = undefined) {
    console.log(optional);
}

fun2();     // undefined
