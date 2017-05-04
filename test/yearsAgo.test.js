const assert = require('assert');

const yearsAgo = require('../yearsAgo');

describe('The yearsAgo function', function() {

  it('should return how many years ago', function() {
    assert.equal(28, yearsAgo(new Date('1989')));
  });
  it('should return number of years ago', function() {

    assert.equal(2, yearsAgo(new Date('2015')));
  });
});
