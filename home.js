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

function greeting() {
    var name = prompt('What is your name?');
    var result = 'hello' + ' ' + name; // string concatenation
    console.log(result);
}

// greeting();

// how do arguments work in functions?
// how do we add 2 numbers together in a function

function sumNumbers(num2, num3) {
    var result = num2 + num3;
    console.log(result);
}

sumNumbers(10, 10);

