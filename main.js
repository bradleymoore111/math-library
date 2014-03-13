(function(){
	var ex1 = [4,12,9,0,-4];
	var ex2 = [4,8,5,-1,-2];
	var ex4 = [2,-9,10,5,-12,4];
	// Defining variables

	// For final zeros
	var zeros = [];

	// For the purpose of rational roots theorem

	function solvePolynomials(a){
		// Have custom library, math object

		// Defining length for later for loops
		var length = a.length;
		// Redefines length for end zeros, as if factoring x out of x^3+4x, since there's a zero it removes it
		var origZeros = 0;
		for(i=0;i<length;i++){
			if(a[length-1]==0){
				origZeros++;
				legnth-=1;
				zeros[zeros.length]=0;
			}
		}	
		var beginFactors = math.factor(a[0])
		var endFactors = math.factor(a[length-1])
		// Checking the factors with synthetic division
		var toSend
		var tempLength
		// First sends it twice, once for positive once for negative
		// Has a problem with sending the same number in 2 different ways
		// Eg. Sending -2/1 and -4/2
		for(y=0;y<=beginFactors.length;y++){
			for(n=0;n<=endFactors.length;n++){
				toSend=endFactors[n]/beginFactors[y];
				if(0==math.synthetic(a,toSend)){
					tempLength=zeros.length;
					zeros[tempLength]=toSend;
				};
			};
		}
		for(y=0;y<beginFactors.length;y++){
			for(n=0;n<endFactors.length;n++){
				toSend=-1*endFactors[n]/beginFactors[y];
				if(0==math.synthetic(a,toSend)){
					tempLength=zeros.length;
					zeros[tempLength]=toSend;
				};
			};
		}
		console.log(zeros)
	}
	solvePolynomials(ex1)
})();