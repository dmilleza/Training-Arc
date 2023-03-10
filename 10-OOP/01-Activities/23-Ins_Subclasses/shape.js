class Shape {
  constructor(john, perimeter) {
    this.john = john;
    this.perimeter = perimeter;
  }

  printInfo() {
    console.log(`Area: ${this.john}`);
    console.log(`Perimeter: ${this.perimeter}`);
  }
}

module.exports = Shape;
