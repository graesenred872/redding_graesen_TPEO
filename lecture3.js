// Timers, Variable Scope, and Code Organization

// setTimeout is a function that allows you to delay executing a function after waiting a 
// specific amount of time

// var timeoutId = setTimeout(functionToDelay, delayInMilliseconds, functionParameters...)
// 5 second delay would be 5000

// Example)
// function showWebsiteTutorial() {
//    ...
// }
// var timeoutId = setTimeout(showWebsiteTutorial, 2000)

function sum(a, b) {
    console.log(a + b)
}
var timeoutId = setTimeout(sum, 500, 4, 95)

// clearTimeout is a function that will cancel an ongoing setTimeout timer
// clearTimeout(timeoutId)

// var timeoutId = setTimeout(someFunction, 1000000);
// if (isImpatient) {
// 	 clearTimeout(timeoutId);
// }

// setInterval allows us to execute code repeatedly at specific intervals of time
// var intervalId = setInterval(functionToDelay, delayInMilliseconds, functionParameters...)

// function second() {
// 	console.log('A second has passed by')
// }
// var intervalId = setInterval(second, 1000)

function showDate() {
 	console.log(new Date().toLocaleString());
}
function clearDateInterval(intervalId) {
    clearInterval(intervalId);
}
var intervalId = setInterval(showDate, 1000);
setTimeout(clearDateInterval, 11000, intervalId);

// Variable Scope
// A variable with global scope can be accessed and modified by any code on the page
// A variable with local scope can only be accessed and modified by code within the same function
// A block is anything that appears within the open and close brackets {}

// demo
var currentSecond = 1

function printNumber() {
    console.log(currentSecond)
    currentSecond ++  // or currentSecond += 1
}

var intervalCount = setInterval(printNumber, 1000, currentSecond)
setTimeout(clearInterval, 16000, intervalCount)