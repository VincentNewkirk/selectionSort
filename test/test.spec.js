var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var testAlg = require('./../js/script.js');

describe('Selection Sort', function () {
  it('It should exist', function () {
    testAlg.should.exist;
  });
  it('Should be a function', function () {
    expect(testAlg).to.be.a('function');
  });

  describe('The Result', function () {
    it('It should equal this', function () {
    var testArr = [5,2,3,4,1];
    expect(testAlg(testArr)).to.deep.equal([1,2,3,4,5]);
    });
  });
});