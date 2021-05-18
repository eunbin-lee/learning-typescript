"use strict";
let count = 0;
count += 1;
// count = '문자열';
const message = 'hello world';
const done = false;
const numbers = [1, 2, 3];
const messages = ['hello', 'world'];
// messages.push(1);
let mightBeUndefined = undefined;
let nullableNumber = null;
let color = 'red';
color = 'yellow';
// color = 'green';
function sum(x, y) {
    return x + y;
}
const result = sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
function returnNothing() {
    console.log('어쩌고저쩌고');
}
function returnStringOrNumber() {
    return 4;
}
