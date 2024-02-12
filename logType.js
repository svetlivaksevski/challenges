const data = ;
switch(typeof data) {
case 'undefined':
	console.log("This is a undefined!");
	break;
case 'number':
	console.log(isNaN(data) ? "This is not a number!" : "This is a number!");
	break;
case 'string':
	console.log("This is a string!");
	break;
case 'boolean':
	console.log("This is a boolean!");
	break;
case 'bigint':
	console.log("This is a bigint!");
	break;
case 'function':
	console.log("This is a function!");
	break;
case 'object':
		console.log(data === null ? "This is null!" : (Array.isArray(data) ? "This is an array!" : "This is an object!"));
	break;
default:
	console.log("I have no idea!");
}