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