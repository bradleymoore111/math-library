var math = {
	synthetic:function(s,n){
		var top =  s;var mid = [];var bot = [];
		mid[0]=0;
		for(i=0;i<s.length;i++){
			bot[i]=(top[i]+mid[i]);
			mid[i+1]=(bot[i]*n);
		}
		var remainder=bot[s.length-1]
		return remainder;
	},
	factor:function(n){
		var factored=new Array();
		var temp;
		if(n>=0){
			for(i=0;i<n/2+1;i++){
				temp=(n/i);
				if(temp%1==0){
					factored[factored.length]=i;
				}
			}
		}
		if(n<0){
			for(i=0;i<this.abs(n);i++){
				temp=(this.abs(n)/i);
				if(temp%1==0){
					factored[factored.length]=-i
				}
			}
		}
		factored[factored.length]=n;
		return factored;
	},
	abs:function(n){
		if(n<0){
			return (n*-1);
		}else{
			return n;
		}
	},
	floor:function(n){
		var end=(n-(n%1))
		return end
	},
	ceiling:function(n){
		var end=((n-(n%1))+1)
		return end
	}
}