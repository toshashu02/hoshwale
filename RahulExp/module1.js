exports.factorial = function(n)
{
fact =1;
for( i=1;i<=n;i++)
{
	fact = fact*i;
}
return fact;
}

exports.Star = function(n)
{

for( i=0;i<=n;i++)
{
	for(j=0;j<=i;j++){
		console.log("*"+" ");
	}
	console.log();
}

}

exports.prime=function(p){
msg="";
flag=0;
for(i=2;i<p;i++){
	if(p%i==0){
		flag=1;
		break;
	}
	else{
		flag=0;
	}

}

if(flag==1){
return msg="not a prime";
}
else{
return msg="prime";	
}
}
exports.addition=function(a,b)
{
return parseInt(a)+parseInt(b);
}

exports.substraction=function(a,b)
{
return parseInt(a)-parseInt(b);
}

exports.multiplication=function(a,b)
{
return parseInt(a)*parseInt(b);
}

exports.division=function(a,b)
{
return parseInt(a)/parseInt(b);
}
