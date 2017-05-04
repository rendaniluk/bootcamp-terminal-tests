const assert = require('assert');

const transportFee = require('../transportFee');

describe('The transportFee function', function() {

  it('should check if string exist and return Fee else it go for default',
    function() {
      assert.equal('Transport Fee is R20', transportFee('morning'));
    });
  it('should check if string exist and return Fee else it go for default',
    function() {

      assert.deepEqual('your not working Sunday', transportFee('Sunday'));
    });
});
