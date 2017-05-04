const assert = require('assert');

const countAllPaarl = require('../countAllPaarl')

describe('The countAllPaarl function', function(){

    it('should count in string separated by comma & return number for string startswith CJ', function(){
        assert.equal(3, countAllPaarl('CJ 551,CY 223,CA 996,CJ 100,CJ 255'));
    });
    it('should count in string separated by comma & return number for string startswith CJ', function(){

        assert.deepEqual(2, countAllPaarl('CJ 551,CY 223,CA 996,CJ 100'));
    });
});
