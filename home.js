console.log('hello');
//alert('hello This is JIGC');

//variables

var b = 'smoothie';

console.log(b);

var somenumber = 45;
console.log(somenumber);

// request input

// var age = prompt('what is your age?');


// input within the html
// document.getElementById('someText').innerHTML = age;

//numbers in js
var num1 = 5.7;
// console.log(5 *10);

// increment num1 by 1
num1++;

// decrement num1 by 1
num1--;
console.log(num1);

// Divide, Multiply *, remainder %
console.log(num1 / 6);

// increment decrement by 10
num1 += 10;
console.log(num1);

/* functions
1. Create a function
2. Call the function
*/

// create
function fun(){
    console.log('this is a function');
}

// call
fun();

/* create a function that take and says hello 
followed by your name

for example

name 'JIGC'

return: "Hello JIGC"

*/

function greeting(yourName) {
    var result = 'hello' + ' ' + yourName; // string concatenation
    console.log(result);
}

// var name = prompt('What is your name?');
// greeting(name);

// how do arguments work in functions?
// how do we add 2 numbers together in a function

function sumNumbers(num2, num3) {
    var result = num2 + num3;
    console.log(result);
}

sumNumbers(10, 10);

/* while loops

var num = 0;

while (num <100) {
    num += 1;
    console.log(num);
}

*/ 

// for loops

for (let num5 = 0; num5 <= 100; num5++){
    console.log(num5);
}

/* data types

let = yourAge = 29; // number
let = yourName = JIGC; // string
let name = {first: 'jane', last: 'doe'}; // object
let truth = false; //boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null; // null
*/


// strings in javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana \napple'; // new line \n
console.log(moreFruits);

console.log(fruit.length);
console.log(fruit.indexOf('q'));
console.log(fruit.slice(1, 3));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt('2'));
console.log(fruit[2]);
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // split by a character

// Array

let vegetables = ['corn', 'pepper', 'zucchini'];
// let vegetables = new Array ('corn', 'pepper', 'zucchini');

console.log(vegetables[1]); // access value at index 2nd. starts at 0

vegetables[0] = 'tomato' // replaces value at 0
console.log(vegetables);

for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

// array common methods
console.log('to string', vegetables.toString());
console.log(vegetables.join(' * '));
console.log(vegetables, vegetables.pop(), vegetables); // removes last item
console.log(vegetables, vegetables.push('corn'), vegetables); // appends
console.log(vegetables[3]);
vegetables[3] = 'zucchini'; // appends
console.log(vegetables);
