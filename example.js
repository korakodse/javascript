// เขียนโปรแกรมเครื่องคิดเลขโดยมี 
// function + - * / และจะต้องนำ concept callback anony arrow มาใช้ 
// รับค่าเลขจากผู้ใช้

const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

const calculator = [add, sub, mul, div];
// forEach เป็น fuction callback | function(opt) เป็นตัว callback และ anonymous function
calculator.forEach(function(opt){
    console.log("Result: " + opt(num1, num2));
});