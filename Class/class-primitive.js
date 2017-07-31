class ExtendableError extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.stack = new Error().stack;
        this.name = this.constructor.name;
    }
}

class MyError extends ExtendableError {
    constructor(m) {
        super(m);
    }
}

var err = new MyError('test');

console.log(err.message);           // test

console.log(err instanceof Error);  // true

console.log(err.name);              // MyError

console.log(err.stack);
// at MyError.ExtendableError (D:\GitRepo\demo-js\Class\class-primitive.js:5:22)
// at MyError (D:\GitRepo\demo-js\Class\class-primitive.js:12:9)
// at Object.<anonymous> (D:\GitRepo\demo-js\Class\class-primitive.js:16:11)
// at Module._compile (module.js:570:32)
// at Object.Module._extensions..js (module.js:579:10)
// at Module.load (module.js:487:32)
// at tryModuleLoad (module.js:446:12)
// at Function.Module._load (module.js:438:3)
// at Module.runMain (module.js:604:10)
// at run (bootstrap_node.js:394:7)
