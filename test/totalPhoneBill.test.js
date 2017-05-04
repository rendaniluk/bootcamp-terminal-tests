const assert = require('assert');
const totalPhoneBill = require('../totalPhoneBill');

describe('The totalPhoneBill function', function() {

  it('should return total bill of call and sms', function() {
    assert.equal(10.2, totalPhoneBill('call,sms,call,sms,sms,call'));
  });
  it('should should return total bill of call and sms', function() {

    assert.deepEqual(14.25, totalPhoneBill(
      'call,sms,call,sms,sms,call,sms,call,sms'));
  });
});
