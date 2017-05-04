const assert = require('assert');
const isFromBellville = require('../isFromBellville');
describe('The isFromBellville function', function() {

  it('should return true for all startwith CY', function() {
    assert.equal(true, isFromBellville('CY 833-221'));
  });
  it('should return false for other', function() {
    assert.equal(false, isFromBellville('CJ 4502'));
  });
});
