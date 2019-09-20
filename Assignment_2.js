var fsBlocking = require("fs");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

debugger;

rl.question('Please enter the first number : ', (answer1) => {
    debugger;
    rl.question('Please enter the second number : ', (answer2) => {
        var result = (+answer1) + (+answer2);
        console.log(`The sum of above two numbers is ${result}`);
        rl.close();
    });
});

debugger;

var filedata = fsBlocking.readFileSync('Demo.txt');

console.log("Blocking: "+filedata.toString());
console.log("Program Blocking Ended \n\n");



debugger;
  
var fsNonBlocking = require("fs");


fsNonBlocking.readFile('Demo.txt', function (err, data) {
    if (err) return console.error("Error is:"+err);
    console.log("Non-blocking: "+filedata.toString());
 });
 
 console.log("Program nonblocking Ended");

 