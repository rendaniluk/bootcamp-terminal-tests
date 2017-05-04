const assert = require('assert');

const countRegNumber = require('../countRegNumber');

describe('The countRegNumber function', function() {

  it('should count reg. no: in a string', function() {
    assert.equal(4, countRegNumber(
      'CA 182736,CY 523519,CJ 812328,AA 11 BR GP'));
  });
  it('should count reg. no: in a string', function() {

    assert.equal(7, countRegNumber(
      'CA 182736,CY 523519,CJ 812328,AA 11 BR GP,LWJ 022 L,MUP 585 EC ,ND 89457'
    ));
  });
});
