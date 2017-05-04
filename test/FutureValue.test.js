const assert = require('assert');

const FutureValue = require('../FutureValue');

describe('The FutureValue function', function() {

  it('should return the value of investment in future', function() {
    assert.equal(1610.51, FutureValue(1000, (10 / 100), 5, 1));
  });
  it('should return a NaN if parameters are letter string', function() {

    assert.equal('NaN', FutureValue("r", ("s" / 'k'), "v", "m"));
  });
});
