const assert = require('assert');

const findItemsOver = require('../findItemsOver');
describe('The findItemsOver function', function() {

  it('should search for given threshold & return list over', function() {
    assert.deepEqual([{
      name: 'pears',
      price: 37
    }], findItemsOver([{
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
    }, ], 30));
  });
  it('should search for given threshold & return list over', function() {
    assert.deepEqual([{
      name: 'pears',
      price: 37
    }, {
      name: 'bananas',
      price: 27
    }], findItemsOver([{
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
    }, ], 10));
  });
});
