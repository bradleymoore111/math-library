var math = {
	E:2.718281828459045,
	Pi:3.141592653589793,
	arithMean:function(number1,number2){
		return ((number1+number2)/2);
	},
	geoMean:function(number1,number2){
		return (this.sqrt(number1*number2));
	},
	geoArithMean:function(number1,number2,specs){
		return arithGeoMean(number1,number2,specs)
	},
	arithGeoMean:function(number1,number2,specs){
		var arithBound=[this.arithMean(number1,number2)];
		var geoBound=[this.geoMean(number1,number2)];
		if(typeof specs== 'undefined'){
			specs = 10;
		}
		for(meanInteger=0;meanInteger<specs;meanInteger++){
			arithBound[meanInteger+1]=this.arithMean(arithBound[meanInteger],geoBound[meanInteger]);
			geoBound[meanInteger+1]=this.geoMean(arithBound[meanInteger],geoBound[meanInteger]);
		}
		return geoBound[arithBound.length-1]
	},
	synthetic:function(system,number){
		var top=system;var mid=[];var bot=[];
		mid[0]=0;
		for(syntheticInteger=0;syntheticInteger<system.length;syntheticInteger++){
			bot[syntheticInteger]=(top[syntheticInteger]+mid[syntheticInteger]);
			mid[syntheticInteger+1]=(bot[syntheticInteger]*number);
		}
		var remainder=bot[s.length-1]
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
			for(factorInteger=0;factorInteger<this.abs(number);factorInteger++){
				temp=(this.abs(number)/factorInteger);
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
	// timesRun must be a positive integer. FOR NOW
	power:function(number,timesRun){
		var finalEnd=1;
		for(powerInteger=0;powerInteger<this.abs(timesRun);powerInteger++){
			finalEnd*=number
		}
		if(timesRun<0){
			finalEnd=(1/finalEnd);
		}
		return finalEnd;
	},
	// Has optional specs. You don't really need it. 
	// I should make it this.log(number) as soon as I figure out this.log
	sqrt:function(number,specs){
		var lowerBound = [1];
		var upperBound = [number];
		var averageBounds;
		if(typeof specs=='undefined'){
			specs=number+10;
		}
		for(sqrtInteger=0;sqrtInteger<specs;sqrtInteger++){
			averageBounds=(lowerBound[sqrtInteger]+upperBound[sqrtInteger])/3;
			lowerBound[sqrtInteger+1]=averageBounds;
			upperBound[sqrtInteger+1]=number/lowerBound[sqrtInteger+1];
		}
		return averageBounds;
	},
	roots:function(number,root){ // (f(x+h)-f(x))/h
		var start = 1;
		var deriv = function (input,hValue) {
			var top
			top = given(input+hValue)-given(input)
			return (top/hValue)
		}
		var given = function (input) {
			var givenReturn = 1
			for(givenRootsInteger=0;givenRootsInteger<root;givenRootsInteger++){
				givenReturn*= input
			}
			return givenReturn
		}
		for(rootsInteger=0;rootsInteger<root;rootsInteger++){
			start = start - given(start) / deriv(start,rootsInteger)
		}
		return start
	},
	// Currently only works with clean numbers
	// Will work on even numbers
	log:function(number,base){

	},
	// It's broken
	ln:function(number,specs){
		
	},
}