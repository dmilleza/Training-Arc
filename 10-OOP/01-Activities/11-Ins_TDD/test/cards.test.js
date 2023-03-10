// const Cards = require('../cards')

// describe("Cards", () => {
//     it("should return an object containing a 'string' property"), () => {
//         const obj = new Cards();

//         expect
//     }
// })

const sum = require("../cards");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 2 to equal 3", () => {
  const added = new sum(1, 2);
  expect(added.number).toEqual(3);
});
