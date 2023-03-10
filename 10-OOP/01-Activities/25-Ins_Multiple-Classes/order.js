class Order {
  constructor(itemy) {
    this.itemy = itemy;

    this.id = Math.floor(Math.random() * 99) + 1;
  }
}

module.exports = Order;
