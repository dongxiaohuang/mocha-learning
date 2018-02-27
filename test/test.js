var assert = require('assert');// core module
var C = require('../cash.js');
var chai = require('chai');
var expect = require('chai').expect;
// describe('Array', function() {
//  describe('#indexOf()', function() {
//    it('should return -1 when the value is not present', function() {
//      assert.equal([1,2,3].indexOf(4), -1);
//    });
//  });
// });

describe('Cash Register', function(){
  beforeEach(function(){
    console.log('before HOOK : beforeEach');
  });
  // before(function(){
  //   console.log('HOOK before once')
  // });
  // afterEach(function(){
  //   console.log('after each');
  // });
  // after(function(){
  //   console.log('after once');
  // });

  describe('Module C', function(){
    it('should hava a getChange Method', function(){
      assert.equal(typeof C, 'object');
      // assert.equal(typeof function dd, 'function');
      assert.equal(typeof C.getChange, 'function');
    });
    // ONLY HOOK
    it.only('getChange(210, 300) should equal [50, 20, 20]', function(){
      let result = C.getChange(210,300);
      assert.deepEqual(result, [50,20,20]);
    });
    it('getChange(486, 1000) should equal [500, 10, 2, 2]', function(){
      assert.deepEqual(C.getChange(486, 1000), [500, 10, 2, 2]);
    });
    it('getChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', function(){
    assert.deepEqual(C.getChange(1487,10000), [5000, 2000, 1000, 500, 10, 2, 1 ]);
    });
    // SKIP HOOK
    it.skip('test expect', function(){
      var world = "hello world"
      expect(world).to.equal('Hello World');
      expect(world).to.not.equal('Hello World');
      expect(world).to.be.a('string');
      expect(world).to.not.be.a('string');
      expect(world).to.contain('hello');
      expect('Hello World').to.equal('Hello World');
    });
  });
});


describe('Test Hook', function(){

});
