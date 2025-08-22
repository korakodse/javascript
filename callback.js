// callback 1
const prompt = require('prompt-sync')();

function greeting(name) {
    console.log('Hello' + " " + name);
} //function callback

function processInput(callback) {
    const name = prompt('Enter your name: ');
    callback(name);
} //function main

processInput(greeting);

// callback 2
// function displayMessage(){
//     console.log('This message is displayed using a callback function.');
// }

// setTimeout(displayMessage, 2000);

//callback 3
// function inc(num, func){
//     num += 1;
//     func(num);
// }

// function showValue(value){
//     console.log('The value is: ' + value);
// }

// inc(100, showValue)

//callback 4
// function performOperation(a, b, operation) {
//     return operation(a,b); // Perform addition
// }

// function add(x,y){
//     return x+y;
// }

// function multi(x,y){
//     return x*y;
// }

// console.log(performOperation(5, 10, add)); // Output: 15
// console.log(performOperation(5, 10, multi)); // Output: 50