const assert = require('assert');
const countAllFromTown = require('../countAllFromTown');
describe('The countAllFromTown function', function() {

  it(
    'should count in string separated by comma & return number for certain town',
    function() {
      assert.equal(0, countAllFromTown(
        'CL 124,CY 567,CL 345,CJ 456,CL 341', 'CF'));
    });
  it(
    'should count in string separated by comma & return number for certain town',
    function() {

      assert.equal(4, countAllFromTown(
        'CL 124,CY 567,CL 441,CL 345,CJ 456,CL 341', 'CL'));
    });
});
