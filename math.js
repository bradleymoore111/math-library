var math = {
	E:function(){
		var bottomSegment
		var total

	},
	Pi:3.141592653589793,
	LN2:0.6931471805599453,
	arithMean:function(number1,number2){
		return ((number1+number2)/2);
	},
	geoMean:function(number1,number2){
		return (math.sqrt(number1*number2));
	},
	geoArithMean:function(number1,number2){
		return arithGeoMean(number1,number2)
	},
	arithGeoMean:function(number1,number2){
		var arithBound=[math.arithMean(number1,number2)];
		var geoBound=[math.geoMean(number1,number2)];
		var meanInteger=0
		while(arithBound[arithBound.length-1]!==geoBound[geoBound.length-1]){
			arithBound[meanInteger+1]=math.arithMean(arithBound[meanInteger],geoBound[meanInteger]);
			geoBound[meanInteger+1]=math.geoMean(arithBound[meanInteger],geoBound[meanInteger]);
			meanInteger+=1;
		}
		return geoBound[geoBound.length-1]
	},
	synthetic:function(system,number){
		var top=system;var mid=[];var bot=[];
		mid[0]=0;
		for(syntheticInteger=0;syntheticInteger<system.length;syntheticInteger++){
			bot[syntheticInteger]=(top[syntheticInteger]+mid[syntheticInteger]);
			mid[syntheticInteger+1]=(bot[syntheticInteger]*number);
		}
		var remainder=bot[system.length-1]
		return remainder;
	},
	factor:function(number){
		var factored=new Array();
		var temp;
		if(number>=0){
			for(factorInteger=0;factorInteger<number/2+1;factorInteger++){
				temp=(number/factorInteger);
				if(temp%1==0){
					factored[factored.length]=factorInteger;
				}
			}
		}
		if(number<0){
			for(factorInteger=0;factorInteger<math.abs(number);factorInteger++){
				temp=(math.abs(number)/factorInteger);
				if(temp%1==0){
					factored[factored.length]=-factorInteger
				}
			}
		}
		factored[factored.lenumbergth]=number;
		return factored;
	},
	abs:function(number){
		if(number<0){
			return (number*-1);
		}else{
			return number;
		}
	},
	floor:function(number){
		var finalEnd=(number-(number%1))
		return finalEnd
	},
	ceiling:function(number){
		var finalEnd=((number-(number%1))+1)
		return finalEnd
	},
	max:function(array){ // Shit works
		var tempArray=array
		var maxTempArray=tempArray
		var time=array.length
		for(maxInteger=0;maxInteger<time;maxInteger++){
			console.log("Being run the " + maxInteger + " time.")
			console.log("The current maxTempArray is "+maxTempArray)
			if(maxTempArray[0]>=maxTempArray[1]){

				console.log(maxTempArray.splice(1,1));
			}
			if(maxTempArray[0]< maxTempArray[1]){
				console.log(maxTempArray.splice(0,1));
			}

		}
		return maxTempArray
	},
	// exponent must be a positive integer. FOR NOW
	power:function(number,exponent){
		var finalEnd=1;
		for(powerInteger=0;powerInteger<math.abs(exponent);powerInteger++){
			finalEnd*=number
		}
		if(exponent<0){
			finalEnd=(1/finalEnd);
		}
		return finalEnd;
	},
	// Has optional specs. You don't really need it. 
	// I should make it math.log(number) as soon as I figure out math.log
	sqrt:function(number){ //sqrt:function(number,specs){
		var lowerBound = [1];
		var upperBound = [number];
		var averageBounds;
		var specs = number+10
		for(sqrtInteger=0;sqrtInteger<specs;sqrtInteger++){
			averageBounds=(lowerBound[sqrtInteger]+upperBound[sqrtInteger])/2;
			lowerBound[sqrtInteger+1]=averageBounds;
			upperBound[sqrtInteger+1]=number/lowerBound[sqrtInteger+1];
		}
		return averageBounds;
	},
	rad:function(number,index){
		//this method determines the nth root, if n is a positive integer (fixed if power works, nonintegers work)
		
		if(number<0) {
			return "cannot exist";
		}
		
		var final = 2; //this is just our most current answer
		var guess = 100; //this number starts off the process
		var time = new Date();
		var runTime = 0;
		var startTime = time.getTime();
		
		while((final !== guess) && (runTime < 20000)) {
			guess = final;
			final = guess - (math.power(guess,index) - number) / (index * math.power(guess,index - 1));
			var time2 = new Date();
			var endTime = time2.getTime();
			runTime = endTime - startTime;
		}
		
		return final;
	},
	// Currently only works with clean numbers
	// Will work on even numbers
	log:function(number,base){

	},
	// It's broken
	ln:function(number,specs){
		
	},
	rrt:function(first,last){
		var lastFactors =math.factor(last);
		var firstFactors=math.factor(first);
		var totalFactors=[];
		
		for(rrtFirstInteger=0;rrtFirstInteger<firstFactors.length;rrtFirstInteger++){
			for(rrtSecndInteger=0;rrtSecndInteger<lastFactors.length;rrtSecndInteger++){
				totalFactors[totalFactors.length]=math.abs(lastFactors[rrtFirstInteger]/firstFactors[rrtSecndInteger]);
				totalFactors[totalFactors.length]=-math.abs(lastFactors[rrtFirstInteger]/firstFactors[rrtSecndInteger]);
			}
		}
		
		//sorts the array for ease of use. Bubble Sort

		var sort = function(array) {
		    
		    var length = array.length-1; 
		    
		    for(i=0;i<array.length;i++) {
		        
		        var sorted = true;
		        
		        for(j=0;j<length;j++) {
		            if(array[j]>array[j+1]) {
		                array.splice(j,2,array[j+1],array[j]);
		                sorted = false;
		            }
		        }
		        
		        if(sorted) {
		            return array;
		        }
		        
		        length--;
		        
		    }
		    
		    return array;
		};
		
		totalFactors = sort(totalFactors);
		
		//Deletes all duplicates
		
		var runs = 0;
		
		while(runs<totalFactors.length-2) {
			if(totalFactors[runs]===totalFactors[runs+1]) {
				totalFactors.splice(runs,1);
			} else {
				runs++;
			}
		}
		
		return totalFactors;
	},
};
