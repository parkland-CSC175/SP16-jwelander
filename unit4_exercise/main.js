
console.log("Hello World2!");
// 4a
var calculator = function(arg1, action, arg2){
	// 6
	if (arg1 === null || arg1 === undefined || typeof(arg1) !== "number"){
		return("INVALID");
	}
	if (arg2 === null || arg2 === undefined || typeof(arg2) !== "number"){
		return("INVALID");
	}
	if (action !== "add" && action !== "subtract" && action !== "multiply" && action !== "divide"){
		return("INVALID");
	}
	// 5
	if (action === "add"){
		return (arg1 + arg2);
	}
	else if (action === "subtract"){
		return (arg1 - arg2);
	}
	else if (action === "multiply"){
		return (arg1 * arg2);
	}
	else if (action === "divide"){
		return (arg1 / arg2);
	}
}

//8
var input = {arg1: 2, action: "add", arg2: 2 };

function objectCalculator(calcArgs){
	
	if (calcArgs.arg1 === null || calcArgs.arg1 === undefined || typeof(calcArgs.arg1) !== "number"){
		return("INVALID");
	}
	if (calcArgs.arg2 === null || calcArgs.arg2 === undefined || typeof(calcArgs.arg2) !== "number"){
		return("INVALID");
	}
	if (calcArgs.action !== "add" && calcArgs.action !== "subtract" && calcArgs.action !== "multiply" && calcArgs.action !== "divide"){
		return("INVALID");
	}
	// 5
	if (calcArgs.action === "add"){
		return (calcArgs.arg1 + calcArgs.arg2);
	}
	else if (calcArgs.action === "subtract"){
		return (calcArgs.arg1 - calcArgs.arg2);
	}
	else if (calcArgs.action === "multiply"){
		return (calcArgs.arg1 * calcArgs.arg2);
	}
	else if (calcArgs.action === "divide"){
		return (calcArgs.arg1 / calcArgs.arg2);
	}
}
console.log(objectCalculator(input));
//7
var calcTest = function(){
	console.log("in original test");
	console.log( calculator(2,"add",2));
	console.log( calculator("a","add","0"));
	console.log( calculator(10,"divide",2));
	console.log( calculator(3,"multiply",3));
}

calcTest();

//9
var calcTest2 = function(){
	var testData = [
		{arg1: 2, action: "add", arg2: 2},
		{arg1: "a", action: "add", arg2: "0"},
		{arg1: 10, action: "divide", arg2: 2},
		{arg1: 3, action: "multiply", arg2: 3}
	]
	console.log("in object test");
	for (var i = 0; i < 4; i++){
		console.log(objectCalculator(testData[i]));
	}
}

calcTest2();
