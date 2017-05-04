const assert = require('assert');

const regCheck = require('../regCheck');

describe('The regCheck function', function() {

  it('should return true for correct endwith', function() {
    assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
  });
  it('should return false for incorect endwith', function() {

    assert.equal(false, regCheck('RENDANI EC', 'L'));
  });
});
