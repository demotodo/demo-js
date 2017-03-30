var a = 5;
var b = 10;

function tag(s, v1, v2) {
    console.log(s.length);
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);

    console.log(v1);
    console.log(v2);

    return "OK";
}

console.log(tag `Hello ${a + b} world ${a * b}`);
// 3
// Hello
// world
//
// 15
// 50
// OK


// ----------------------------------------------------

var total = 30;

var msg = passthru `The total is ${total} (${total * 1.05} with tax)`;

function passthru(literals) {
    var result = "";
    var i = 0;

    while (i < literals.length) {
        result += literals[i++];

        if (i < arguments.length) {
            result += arguments[i];
        }
    }

    return result;
}

console.log(msg);   // The total is 30 (31.5 with tax)


// ----------------------------------------------------

function passthru2(literals, ...values) {
    var result = "";

    for (var i = 0; i < values.length; i++) {
        result += literals[i] + values[i];
    }

    result += literals[i];

    return result;
}

var msg2 = passthru2 `The total is ${total} (${total * 1.05} with tax)`;

console.log(msg2);  // The total is 30 (31.5 with tax)
