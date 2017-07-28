class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

}

console.log(typeof Point);      // function

console.log(Point == Point.prototype.constructor);      // true

console.log(Point.name);        // Point


var p = new Point(2, 3);
console.log(p);                 // Point { x: 2, y: 3 }
console.log(p.toString());      // (2, 3)
