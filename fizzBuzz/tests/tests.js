(function() {
  'use strict';
  var chai = require('chai'),
      myfizzBuzzAttempt = require('../app/library.js');

  describe("Fizz Buzz tests ", function() {

    it("should return `Fizz` for number divisible by 3", function() {
      expect(myfizzBuzzAttempt.fizzBuzz(3)).toBe('Fizz');
    });

    it("should return `Buzz` for number divisible by 5", function() {
      expect(myfizzBuzzAttempt.fizzBuzz(5)).toBe('Buzz');
    });

    it("should return `FizzBuzz` for 15", function() {
      expect(myfizzBuzzAttempt.fizzBuzz(15)).toBe('FizzBuzz');
    });

    it("should return `FizzBuzz` for 45", function() {
      expect(myfizzBuzzAttempt.fizzBuzz(45)).toBe('FizzBuzz');
    });

    it("should return `FizzBuzz` for 90", function() {
      expect(myfizzBuzzAttempt.fizzBuzz(90)).toBe('FizzBuzz');
    });

    it("should return `Fizz` for 63", function() {
      expect(myfizzBuzzAttempt.fizzBuzz(63)).toBe('Fizz');
    });

    it("should return 7 since its indivisible by 3 and 5", function() {
      expect(myfizzBuzzAttempt.fizzBuzz(7)).toBe(7);
    });

    it("should return 101 since its indivisible by 3 and 5", function() {
      expect(myfizzBuzzAttempt.fizzBuzz(101)).toBe(101);
    });
  });

})();