class Shape {
    constructor() {
        console.log(new.target);
        console.log(new.target === Shape);
    }
}

class Rectangle extends Shape {
    constructor() {
        super();
    }
}

new Shape();
// [Function: Shape]
// true

new Rectangle();
// [Function: Rectangle]
// false
