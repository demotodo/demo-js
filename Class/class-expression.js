const MyClass = class Me {
    getClassName() {
        return Me.name;
    }
};

console.log(typeof MyClass);        // function

console.log(MyClass.name);          // Me   ??

console.log(new MyClass().getClassName());      // Me


// ----------------------------------------------------

const MyClass2 = class {
    toString() {
        return "Second";
    }
};

console.log(new MyClass2().toString());     // Second


// ----------------------------------------------------

const person = new class {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log('hello', this.name);
    }
}('world');

person.sayHello();  // hello world
