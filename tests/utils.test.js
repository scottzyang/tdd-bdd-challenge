const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect
const should = chai.should
const assert = chai.assert

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

// ensure tests pass with proper values
it("should return the area of a rectangle.", () => {
  const rect_area = utils.area(2, 3);
  expect(rect_area).to.be.a('number');
  assert.equal(rect_area, 6);
});

it("should return the perimeter of a rectangle.", () => {
  const perimeter = utils.perimeter(5, 3);
  expect(perimeter).to.be.a('number');
  assert.equal(perimeter, 16);
});

it("should return the area of a circle with radius.", () => {
  const circ_area = utils.circleArea(4);
  expect(circ_area).to.be.a('number');
  assert.equal(circ_area, Math.PI * Math.pow(4, 2));
});

// Return null if negative values are provided.
it("should return null area if negative w and h are provided.", () => {
  const rect_area = utils.area(-3, 4);
  expect(rect_area).to.be.a('null');
  assert.equal(rect_area, null);
});

it("should return null perimeter if negative w and h are provided.", () => {
  const perimeter = utils.perimeter(-7, 2);
  expect(perimeter).to.be.a('null');
  assert.equal(perimeter, null);
});

it("should return null circleArea if negative radius is provided.", () => {
  const circ_area = utils.circleArea(-3);
  expect(circ_area).to.be.a('null');
  assert.equal(circ_area, null);
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart")

it("Should add a new item to the shopping cart")

it("Should return the number of items in the cart")

it("Should remove items from cart")

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
