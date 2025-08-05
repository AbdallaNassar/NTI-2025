export class Shape {
    constructor(name) {
      this.name = name;
    }
  
    area() {
      throw new Error("Method 'area()' must be implemented.");
    }
  
    perimeter() {
      throw new Error("Method 'perimeter()' must be implemented.");
    }
  
    toString() {
      return `${this.name} - Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
  }
  