"use strict";

const foo = Object.freeze({});

foo.prop = 123;     // TypeError
