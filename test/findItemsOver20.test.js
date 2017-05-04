const assert = require('assert');
const findItemsOver20 = require('../findItemsOver20');
describe('The findItemsOver20 function', function() {

  it('should search for item over 20 and return a list', function() {
    assert.deepEqual([{
      name: 'apples',
      price: 23
    }, {
      name: 'pears',
      price: 37
    }, {
      name: 'bananas',
      price: 27
    }], findItemsOver20([{
      name: 'apples',
      price: 23
    }, {
      name: 'pears',
      price: 37
    }, {
      name: 'bananas',
      price: 27
    }, {
      name: 'apples',
      price: 3
    }, ]));
  });
  it('should search for item over 20 and return a list', function() {

    assert.deepEqual([{
      name: 'pears',
      price: 37
    }, {
      name: 'bananas',
      price: 27
    }], findItemsOver20([{
      name: 'apples',
      price: 10
    }, {
      name: 'pears',
      price: 37
    }, {
      name: 'bananas',
      price: 27
    }, {
      name: 'apples',
      price: 3
    }, ]));
  });
});
