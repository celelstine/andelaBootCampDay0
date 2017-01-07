/**
 * A function to return the min and max numeber(s) in a array
 * @Author okorocelstine@gmail.com (Okoro Celestine)
 */
'use strict'

var submit = {}
submit.fizzBuzz = function(num) {
	var status =0; 
	if((num%3 ==0 )&& (num%5 ==0)) {
		return 'FizzBuzz';
	} else if(num%3==0) {
		return 'Fizz';
	} else if(num%5==0) {
		return 'Buzz';
	} else 	if((num%3 != 0) && (num%5 != 0)) {
		return num
	} else {
		return "expecting a number";
	}

}

module.exports = submit;