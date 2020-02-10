const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns true for ([1, 2, 3], [1, 2, 3])", () => {
    assert.deepEqual((assertArraysEqual([1, 2, 3], [1, 2, 3])), true);
  });
  it("returns false for ([6], [5])", () => {
    assert.deepEqual((assertArraysEqual([6], [5])), false);
  });
});