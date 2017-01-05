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



/* 4. Template literals (Strings)
 ***************************************************************************************/

let fName = 'Derek';
let lName = 'Banas';

// we can embed variable values within strings using 'template literals'
document.write(`${fName} ${lName}<br/>`);

let num1 = 10;
let num2 = 5;

// we can even write expressions within 'template literals' like so:
document.write(`10 * 5 = ${num1 * num2}<br/>`);



/* 5. Tagged template literals
 ***************************************************************************************/

function doMath(strings, ...values) {
    if (strings[0] == 'Add') {
        document.write(`${values[0]} + ${values[1]} = ${values[0] + values[1]}<br/>`);
    } else if (strings[0] == 'Sub') {
        document.write(`${values[0]} - ${values[1]} = ${values[0] - values[1]}<br/>`);
    }
}

doMath `Add${10} ${20}`;
doMath `Sub${10} ${20}`;



/* 6. For of
 ***************************************************************************************/

// 'for of' (rather than 'for in') allows you to directly write out values of an array or object:

for (let c of fName) {
    document.write(`${c}<br/>`);
}

// 'repeat' is a new ECMA6 method to keep in mind — it loops over the same value:

document.write('Hello '.repeat(3) + '<br/>');

// Some other useful methods in ECMA6:

document.write(fName.startsWith('De') + '<br/>');
document.write(fName.endsWith('ek') + '<br/>');
document.write(fName.includes('ere') + '<br/>');

let multiline = "This is \
a multiline \
string";

document.write(`${multiline}<br/>`);

let multiline2 = `This is
a multiline
string`;

document.write(`${multiline2}<br/>`);



/* 7. Functions
 ***************************************************************************************/

function getSum(num1 = 1, num2 = 2) {
    document.write(`${num1} + ${num2} = ${num1 + num2}`);
    document.write(`${arguments[0]} + ${arguments[1]}<br/>`); // <= arguments only deals with values passed in (defaults come up as 'undefined')
}

getSum(3);



/* 8. Rest parameters
 ***************************************************************************************/

function getSumMore(...vals) {
    //               ^ rest param
    let sum = 0;
    for (let i = 0, len = vals.length; i < len; i++) {
        sum += vals[i];
    }
    document.write(`The sum is ${sum}<br/>`);
}

getSumMore(1, 2, 3, 4);

let vals = [1, 2, 3, 4, 5];

getSumMore(...vals);



/* 9. Arrow functions
 ***************************************************************************************/

let difference = (num1, num2) => num1 - num2;
document.write(`5 - 10 = ${difference(5, 10)}<br/>`);

let mult = (num1, num2) => {
    let product = num1 * num2;
    document.write(`${num1} * ${num2} = ${product}<br/>`);
}

mult(5, 50);
