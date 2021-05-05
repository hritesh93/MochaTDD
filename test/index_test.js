var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe("factorial", () => {
    it("returns 120 when given 5", () => {
      const inputNumber = 5;
      const expectedOutput = 120;

      const actual = Calculate.factorial(inputNumber);

      assert.strictEqual(expectedOutput, actual);
    });

    it("returns the factorial of an input number", () => {
      const inputNumber = 4;
      const expectedOutput = 24;

      const actual = Calculate.factorial(inputNumber);

      assert.strictEqual(expectedOutput, actual);
    });
  });
});