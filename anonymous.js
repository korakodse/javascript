// function ที่ไม่มีชื่อ (Anonymous Function)
// 1.
// var sayHello = function() {
//     console.log("Hello, World!");
// };

// sayHello();

// function ที่มี callback และ anonymous function
// 2.
// function inc(num,func){
//     num += 1;
//     func(num);
// }

// var showValue = function(v){ //เป็นทั้ง anonymous function และ callback
//     console.log("Value: " + v);
// };

// inc(10, showValue);

// 3.
// function inc(num, func) {
//     num += 1;
//     func(num);
// }

// inc(99, function(v) {
//     console.log("Value: " + v);
// });

// built-in callback anonymous
// 4.
// setTimeout(function() {
//     console.log("Hello World.");
// }, 2000);

// 5.
const numbers = [1+3, 2, 7, 4, 5];
numbers.forEach(function(num) {
    console.log("Number: " + num);
});

// 6.
// document.getElementById("myButton").addEventListener("click", function() {
//     console.log("Button was clicked!");
// });