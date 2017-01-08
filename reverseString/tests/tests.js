(function(){
  'use strict';
    var chai = require('chai'),
      myReverseStringAttempt = require('../app/library.js');

  describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(myReverseStringAttempt.reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(myReverseStringAttempt.reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(myReverseStringAttempt.reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(myReverseStringAttempt.reverseString('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(myReverseStringAttempt.reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(myReverseStringAttempt.reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(myReverseStringAttempt.reverseString('misc')).toEqual('csim');
    });

  });

  describe("Case for letter case sensitive words", function() {

    it("should return `Celec` for `celeC`", function() {
      expect(myReverseStringAttempt.reverseString('celeC')).toEqual('Celec');
    });

  });

   describe("Case for  words with punctuation  marks", function() {

    it("should return `..ekaf` for `fake..`", function() {
      expect(myReverseStringAttempt.reverseString('fake..')).toEqual('..ekaf');
    });
  });

  describe("Case for  alphanumeric words ", function() {
    it("should return true for `e424e`", function() {
      expect(myReverseStringAttempt.reverseString('e424e')).toEqual(true);
    });

  });

});

})();