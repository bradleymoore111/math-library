function makeSine(amp, periodThing, horizontalShift, verticalShift){
	amplitude=amp;
	period=periodThing;
	hShift=horizontalShift;
	vShift=verticalShift;
	return "f(x) = "+
		((amp==1)?"":amplitude)+"sin("+
		((periodThing==1)?"":periodThing)+"x-"+
			horizontalShift+")+"+verticalShift;
}

function parsePolynomial(s,x){
	// 2x^3-1x^2+4
	var equation = [];

	s=s.replace(/\s*/,"");
	s=s.replace(/[+]/g,"P+");
	s=s.replace(/[-]/g,"M-");
	console.log(s);

	var a = s.split(/[PM]/g);  // a is the equation
	console.log(a);
	var answer=0;
	for(var i=0;i<a.length;i++){
		var b = a[i];
		if(b=="")continue;// Glitch if y=-x or other coefficient of negative value
		if(b.indexOf("x")==-1){
			answer+=parseFloat(b);
		}else{
			if(b.indexOf("^")==-1){
				if(b.indexOf("+x")==0||b.indexOf("x")==0){
					answer+=x;
				}else if(b.indexOf("-x")==0){
					answer-=x;
				}else{
					answer+=parseFloat(b)*x;
				}
			}else{
				// console.log(b.substring(b.indexOf("^")));
				if(b.indexOf("+x")==0||b.indexOf("x")==0){
					answer+=math.pow(x,parseFloat(b.substring(b.indexOf("^")+1)))
				}else if(b.indexOf("-x")==0){
					answer-=math.pow(x,parseFloat(b.substring(b.indexOf("^")+1)));
				}else{
					answer+=parseFloat(b)*math.pow(x,parseFloat(b.substring(b.indexOf("^")+1)));
				}
				// answer+=parseFloat(b)*math.pow(x,parseFloat(b.substring(b.indexOf("^")+1)));
			}
		}
	}

	return answer;
}

var amplitude=0;
var period=math.pi;
var hShift=0;
var vShift=0;

function valueOf(x){
	return amplitude*math.sin(period*x-hShift)+vShift;
}
