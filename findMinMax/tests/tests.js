(function() {
  'use strict';
  var chai = require('chai'),
      expect = chai.expect,
      myAttempt = require('../app/library.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myAttempt.findMinMax([1, 2, 3, 4])).to.equal([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myAttempt.findMinMax([6, 4])).to.equal([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myAttempt.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).to.equal([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myAttempt.findMinMax([4, 4, 4, 4])).to.equal([4]);
      });
      it('should return [2,2.000] for [2,2.000]', function () {
        expect(myAttempt.findMinMax([2,2.000] )).to.equal([2] );
      });

    });

    describe('Return an error messsage for argument  that are not array', function () {

      it('should return "expecting an array of numbers" for [a, b, c]', function () {
        expect(myAttempt.findMinMax(['a', 'b', 'c'])).to.equal("expecting an array of numbers");
      });
      it('should return "expecting an array of numbers" for [4, 6, c]', function () {
        expect(myAttempt.findMinMax([4, 6, 'c'])).to.equal("expecting an array of numbers");
      });

    });

    describe('Return the min and max number in the list with negative numbers in a new list follows `[min, max]`', function () {
      it('should return [-4,-1] for [-4, -3, -2, -1]', function () {
        expect(myAttempt.findMinMax([-4, -3, -2, -1])).to.equal([-4,-1]);
      });
      it('should return [-4,0] for [-4, -3, -2, -1,0]', function () {
        expect(myAttempt.findMinMax([-4, -3, -2, -1,0])).to.equal([-4,0]);
      });

    });

    describe('Return the min and max number in the list with decimal numbers in a new list follows `[min, max]`', function () {
      it('should return [4.0,4.001] for [4.0, 4.0000013,4.0001]', function () {
        expect(myAttempt.findMinMax([4.0, 4.0000013,4.0001])).to.equal([4.0,4.001] );
      });
      it('should return [2,2.001] for [2,2.001,2.00001]', function () {
        expect(myAttempt.findMinMax([2,2.001,2.00001])).to.equal([2,2.001] );
      });

    });

  });

})();