const assert = require('assert');

const isWeekday = require('../isWeekday');

describe('The isWeekday function', function() {

  it('should check if isWeekday return true', function() {
    assert.equal(true, isWeekday('Monday'));
  });
  it('should check if not weekdays return false', function() {

    assert.equal(false, isWeekday('Sunday'));
  });
});
