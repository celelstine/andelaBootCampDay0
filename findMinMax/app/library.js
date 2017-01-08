
'use strict'

var submit = {}
submit.findMinMax = function(num) {
	var min = 0,
	    max =0,
	    cur,
	    minMax=[];
	if ( typeof num[0] !== 'number') {
	  return "expecting an array of numbers only";
	} else {
	  min = max = num[0];
	  	for(var i=1; i<num.length;i++) {
	  		cur = num[i];
	  		if (typeof cur !== 'number') {
	  			return "expecting an array of numbers only";
	  		} else if (cur <min) {
	  			min = cur;
	  		} else if (cur >max) {
	  			max=cur;
	  		}	
	    }
	  	if (min !== max){
	  		minMax.push(min);
	  		minMax.push(max);
	  	} else {
	  		minMax.push(min);
	  	}
    return minMax;
	}
}



module.exports = submit;