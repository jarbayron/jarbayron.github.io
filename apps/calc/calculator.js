function add (a,b) {
	return parseFloat(a)+parseFloat(b);
}               

function subtract (a,b) {
	return parseFloat(a)-parseFloat(b);
}

function sum (obj) {
	return obj.reduce((total,num)=> 
	total + num
	,0)
}

function multiply (a, b) {
	a = parseFloat(a);
	b = parseFloat(b);
	if (Array.isArray(a)) {
		return a.reduce((total,num)=>
		total *= num
		,1)
	}
	return a*b;
}

function power(a,b) {
	return Math.pow(a,b);
}

function factorial(n) {
	let f=[];
	if (n==0 || n==1)
		return 1
	if(f[n]>0)
		return f[n];
	return f[n] = factorial(n-1)*n;
}

/*
module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
*/