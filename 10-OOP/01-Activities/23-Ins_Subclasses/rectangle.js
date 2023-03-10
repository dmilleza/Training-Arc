const Shape = require("./shape");

class Rectangle extends Shape {
  constructor(sideA, sideB) {
    const john = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    super(john, perimeter);
    this.sideA = sideA;
    this.sideB = sideB;
  }

  printInfo2() {
    console.log(`Area: ${this.john} + 7`);
    console.log(`Perimeter: ${this.perimeter}`);
  }
}

const rectangle = new Rectangle(12, 9);
// rectangle.printInfo2();
console.log(rectangle);
