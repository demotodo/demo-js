class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

}

class ColorPoint extends Point {

    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return super.toString() + ' - ' + this.color;
    }
}


let cp = new ColorPoint(2, 3, 'red');

console.log(cp.toString());     // (2, 3) - red

console.log(cp instanceof ColorPoint);      // true
console.log(cp instanceof Point);           // true

console.log(Point.__proto__ === Function.prototype);                // true
console.log(Point.prototype.__proto__ === Object.prototype);        // true

console.log(ColorPoint.__proto__ === Point);                        // true
console.log(ColorPoint.prototype.__proto__ === Point.prototype);    // true

console.log(Object.getPrototypeOf(ColorPoint) === Point);           // true

// ----------------------------------------------------

class A extends null {

}

console.log(A.__proto__ === Function.prototype);        // true
console.log(A.prototype.__proto__ === undefined);       // true


// ----------------------------------------------------

var p = new Point(3, 4);

console.log(cp.__proto__.__proto__ === p.__proto__);    // true

cp.__proto__.__proto__.printName = function () {
    console.log('hi');
};

p.printName();      // hi
cp.printName();     // hi
