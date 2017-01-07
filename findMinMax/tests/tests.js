(function(){
  'use strict';
    var chai = require('chai'),
      myfindMinMaxAttempt = require('../app/library.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect([1,4]).toEqual(myfindMinMaxAttempt.findMinMax([1, 2, 3, 4]));
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myfindMinMaxAttempt.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myfindMinMaxAttempt.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2,78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myfindMinMaxAttempt.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
      it('should return [2,2.000] for [2,2.000]', function () {
        expect(myfindMinMaxAttempt.findMinMax([2,2.000] )).toEqual([2] );
      });

    });

    describe('Return an error messsage for argument  that are not array', function () {

      it('should return "expecting an array of  numbers only " for [a, b, c]', function () {
        expect(myfindMinMaxAttempt.findMinMax(['a', 'b', 'c'])).toEqual("expecting an array of numbers only");
      });
      it('should return "expecting an array of numbers only" for [4, 6, c]', function () {
        expect(myfindMinMaxAttempt.findMinMax([4, 6, 'c'])).toEqual("expecting an array of numbers only");
      });

    });

    describe('Return the min and max number in the list with negative numbers in a new list follows `[min, max]`', function () {
      it('should return [-4,-1] for [-4, -3, -2, -1]', function () {
        expect(myfindMinMaxAttempt.findMinMax([-4, -3, -2, -1])).toEqual([-4,-1]);
      });
      it('should return [-4,0] for [-4, -3, -2, -1,0]', function () {
        expect(myfindMinMaxAttempt.findMinMax([-4, -3, -2, -1,0])).toEqual([-4,0]);
      });

    });

    describe('Return the min and max number in the list with decimal numbers in a new list follows `[min, max]`', function () {
      it('should return [4.0,4.001] for [4.0000011, 4.0000013,4.0001]', function () {
        expect(myfindMinMaxAttempt.findMinMax([4.0000011, 4.0000013,4.0001])).toEqual([4.0000011,4.0001] );
      });
      it('should return [2,2.001] for [2,2.001,2.00001]', function () {
        expect(myfindMinMaxAttempt.findMinMax([2,2.001,2.00001])).toEqual([2,2.001] );
      });

    });

  });

})();