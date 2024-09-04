```js
class Circle {
  constructor() {
    this._radius = null;
    this.area = null;
    this.circumference = null;
  }
  set radius(value) {
    this._radius = value;
    this.area = 3.14 * Math.pow(this._radius, 2);
    this.circumference = 2 * this._radius * 3.14;
  }
  get radius() {
    return this._radius;
  }
}

const circ = new Circle();
```
