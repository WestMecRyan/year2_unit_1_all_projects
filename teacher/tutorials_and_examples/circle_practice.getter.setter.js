// create a Circle class
class Circle {
    // give it an internal constructor function
    constructor(color = 'red') {
        this._color = color;
        this._radius = null;
        this.circumference = null;
        this.area = null;
        // add 2 properties common to a circle
        // initialize them with a value of null
        // make them private
        // don't pass them as parameters to constructor
    }
    get color() {
        return this._color;
    }
    // create a getter to return the radius
    get radius() {
        return this._radius;
    }
    set radius(value) {
        // set the radius of the instance circle to the passed value
        // assign the class Circle radius to the value
        this._radius = value;
        // assign area and circumference a value
        // based on the calculations using value
        // area is 3.14*r**2
        // circumference 3.14*r*2
    }
    _calculateProperties() {
        if (this._radius !== null) {
            this.circumference = (3.14 * (this._radius) * 2);
            this.area = (Math.PI * Math.pow(this._radius, 2));
        } else {
            this._radius = 1;
            this._calculateProperties();
        }
    }
}
// called circle1
const circle1 = new Circle('blue');
circle1.radius = 5;
circle1._calculateProperties();
console.log(circle1.area);
// console.log(circle1.radius);