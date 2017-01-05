/* 1. let
 ***************************************************************************************

/* if we use "var" here, we can write both x's because those are hoisted to global scope
   if we use "let", however, only the x within the block (if block) gets written — beyond scope of outer x! */

if (true) {
    var x = 10;
    document.write('x = ' + x + '<br/>');
}

document.write('x = ' + x + '<br/>');

/* conversely, we cannot overwrite global variables in a way that affects their output outside of block scope */

var y = 10;
if (true) {
    let y = 20;
}

document.write('y = ' + y + '<br/>');



/* 2. const
 ***************************************************************************************/

// const stands for "constant" — it's a variable that you cannot overwrite once it's defined:

const PI = 3.14159;

// would throw an error =>    PI = 2.13;

if (true) {
    const PI = 2.13;
    document.write('PI = ' + PI + '<br />');
    // ^ does not throw an error, because it has its own scope
}

document.write('PI = ' + PI + '<br />');



/* 3. Data types
 ***************************************************************************************/

document.write(typeof true + '<br/>');
document.write(typeof 3.14 + '<br/>');
document.write(typeof 'string' + '<br/>');
document.write(typeof Symbol() + '<br/>');
document.write(typeof { a: 1 } + '<br/>');
document.write(typeof [1, 2, 3] + '<br/>');
document.write(typeof undefined + '<br/>');



/* 4. Strings
 ***************************************************************************************/

let fName = 'Derek';
let lName = 'Banas';

// we can embed variable values within strings using 'template literals'
document.write(`${fName} ${lName}<br/>`);

let num1 = 10;
let num2 = 5;

// we can even write expressions within 'template literals' like so:
document.write(`10 * 5 = ${num1 * num2}`);
