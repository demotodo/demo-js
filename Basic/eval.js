function foo(str, a) {
    // "use strict";
    eval(str);
    console.log(a, b);
}

function bar(str, a) {
    "use strict";
    eval(str);
    console.log(a, b);
}

var b = 2;

foo("var b = 3;", 1);   // 1 3

bar("var b = 3;", 1);   // 1 2
