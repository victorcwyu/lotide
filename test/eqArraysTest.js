const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#tail", () => {
  it("returns true for ([1, 2, 3], [1, 2, 3])", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for ([6], [5])", () => {
    assert.deepEqual(eqArrays([6],[5]), false);
  });
});