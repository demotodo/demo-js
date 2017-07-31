class MyClass {
    get p() {
        console.log('call getter');
    }

    set p(value) {
        console.log('call setter, value: ', value);
    }
}

var m = new MyClass();

m.p = 123;  // call setter, value:  123

m.p;        // call getter
