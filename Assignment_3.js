function syncMultiply() {

console.log("Sync begins:");
const number1 = 10;
const number2 = 12;

const product = number1 * number2;
 console.log("Mulplication is:"+product);

}

async function asyncMultiply(){

	console.log("Async begins:");	
	const number1 = 10;
	const number2 = 12;
	setTimeout(function(){
		console.log(number1*number2);
		
	},2000)
	
	console.log("Product is:");
	
}
syncMultiply();
asyncMultiply();
