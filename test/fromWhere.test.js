const assert = require('assert');
const fromWhere = require('../fromWhere');
describe('The fromWhere function', function() {

  it('should search for origin using regnumber', function() {
    assert.equal('Bellville', fromWhere('CY 002-451'));
  });
  it('should search for origin using regnumber', function() {

    assert.deepEqual('Some other place!', fromWhere('KLM 822 L'));
  });
});
