const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [7, 6] for [1, 2, 7, 6, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 7, 6, 4, 5]), [7, 6]);
  });
});