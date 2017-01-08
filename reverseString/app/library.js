
'use strict'

var submit = {}
submit.reverseString = function(string) {
	var reverse_string="";
	var stringLength=string.length-1;

	if(stringLength<0) {
	  return null; 
	}else {

	  for(var i=stringLength;i>=0;i--) {
		  reverse_string += string[i];	
		}

		var counter=0;
	    while(reverse_string[counter] == string[counter] && counter < stringLength ) {
		   counter++;	
		}
		if (counter == stringLength) {
		 	 return true; 
	     }else {
			return reverse_string; 
		}
	}
}

module.exports = submit;