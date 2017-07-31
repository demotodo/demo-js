class Foo {
    static classMethod(m) {
        console.log('call class method - ', m);
    }
}

class Bar extends Foo {

}

Foo.classMethod(1);     // call class method -  1

Bar.classMethod(2);     // call class method -  2

Foo.staticProp = 123;

console.log(Foo.staticProp);    // 123
