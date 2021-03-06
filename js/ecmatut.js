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



/* 10. Reduce
 ***************************************************************************************/

let valArr = [1, 2, 3, 4, 5];

// reduce is an accumulator — will keep adding values in array until there are none left:
let sumVals = valArr.reduce((a, b) => a + b);
document.write(`Sum: ${sumVals}<br/>`);



/* 11. Filter
 ***************************************************************************************/

let evens = valArr.filter(v => v % 2 === 0);
document.write(`Evens: ${evens}<br/>`);



/* 12. Map
 ***************************************************************************************/

let doubles = valArr.map(v => v * 2);
document.write(`Doubles: ${doubles}<br/>`);



/* 13. Objects
 ***************************************************************************************/

function createAnimal(name, owner) {
    return {
        name,
        owner,
        getInfo() {
            return `${this.name} is owned by ${this.owner}`
        },
        address: {
            street: '123 Main St',
            city: 'Pittsburg'
        }
    };
}

let spot = createAnimal('Spot', 'Doug');
document.write(`${spot.getInfo()}<br/>`);
document.write(`${spot.name} is at ${spot.address.street}<br/>`);
document.write(`${Object.getOwnPropertyNames(spot).join(' ')}<br/>`);



/* 14. Destructuring
 ***************************************************************************************/

let { name, owner } = spot;
document.write(`Name: ${name}<br/>`);

let { address } = spot;
document.write(`Address: ${address.street}<br/>`);

let favNums = [2.722, .52323, 4.24];

let[,,chaos] = favNums;
document.write(`Chaos: ${chaos}<br/>`);

let [, ...last2] = favNums;
document.write(`2nd num: ${last2[0]}<br/>`);

// switch values:
let val1 = 1, val2 = 2;
[val1, val2] = [val2, val1];

document.write(`Val2: ${val2}<br/>`);



/* 15. Classes
 ***************************************************************************************/

class Mammal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    static makeMammal(name) {
        return new Mammal(name);
    }

    getInfo() {
        return `${this.name} is a mammal`;
    }
}

let monkey = new Mammal('Fred');
monkey.name = 'Mark';
document.write(`Mammal: ${monkey.name}<br/>`);

let chipmunk = Mammal.makeMammal('Chipper');
document.write(`Mammal 2: ${chipmunk.name}<br/>`);

class Marsupial extends Mammal {
    constructor(name, hasPouch) {
        super(name);
        this._hasPouch = hasPouch;
    }

    get hasPouch() {
        return this._hasPouch;
    }

    set hasPouch(hasPouch) {
        this._hasPouch = hasPouch;
    }

    getInfo() {
        return `${this.name} is a marsupial`
    }
}

let kangaroo = new Marsupial('Paul', true);
document.write(`It is ${kangaroo.hasPouch} that ${kangaroo.name} has a pouch<br/>`);

document.write(`${chipmunk.getInfo()}<br/>`);
document.write(`${kangaroo.getInfo()}<br/>`);



/* 16. Inheritence
 ***************************************************************************************/

function getClass(classType) {
    if (classType == 1) {
        return Mammal;
    } else {
        return Marsupial;
    }
}

class Koala extends getClass(2) {
    constructor(name) {
        super(name);
    }
}

let carl = new Koala('Carl');
document.write(`${carl.getInfo()}<br/>`);



/* 17. Symbols
 ***************************************************************************************/

let capital = Symbol('State capital');

let pennsylvania = {};
pennsylvania[capital] = 'Harrisburg';
document.write(`Capital of PA: ${pennsylvania[capital]}<br/>`);
document.write(`Symbol capital: ${capital.toString()}<br/>`);

let employNum = Symbol.for('Employee Number');

let bobSmith = {};
bobSmith[employNum] = 10;

let sallyMarks = {};
sallyMarks[employNum] = 11;

document.write(`Bob: ${bobSmith[employNum]}<br/>`);
document.write(`Sally: ${sallyMarks[employNum]}<br/>`);



/* 18. Arrays
 ***************************************************************************************/

let array1 = Array.of(1, 2, 3);

// array from string:
let array2 = Array.from('word');

let array3 = Array.from(array1, (value) => value * 2);

for (let val of array1) document.write(`Array value: ${val}<br/>`);
for (let val of array2) document.write(`Array value: ${val}<br/>`);
for (let val of array3) document.write(`Array value: ${val}<br/>`);



/* 19. Sets
 ***************************************************************************************/

// sets are like arrays but without duplicate elements
var randSet = new Set();
randSet.add(10);
randSet.add('Word');

document.write(`Has 10: ${randSet.has(10)}<br/>`);
document.write(`Set size: ${randSet.size}<br/>`);

randSet.delete(10);

for (let val of randSet) document.write(`Set value: ${val}<br/>`);



/* 20. Maps
 ***************************************************************************************/

var randMap = new Map();
randMap.set('key1', 'Random string');
randMap.set('key2', 10);

document.write(`key1: ${randMap.get('key1')}<br/>`);
document.write(`Map size: ${randMap.size}<br/>`);

randMap.forEach(function(val, key) {
    document.write(`${key}: ${val}<br/>`);
});


/* 21. Promises
 ***************************************************************************************/

// resolve immediately:
var p1 = Promise.resolve('Resolve me!');
p1.then((res) => document.write(`${res}<br>`));


// resolve after 2 seconds:
var p2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Resolve me 2'), 2000);
});
p2.then((res) => document.body.innerHTML+=`${res}<br>`);


let randVal = 18;

var p3 = new Promise(function(resolve, reject) {
    if (randVal == 6) {
        resolve('Good value');
    } else {
        resolve('Bad value');
    }
});

p3.then((val) => document.write(`${val}<br>`), (err) => document.write(`${err}<br>`));


var p4 = new Promise(function(resolve, reject) {
    if (randVal <= 17) {
        throw new Error('Can\'t vote');
    } else {
        resolve('Can vote');
    }
});

p4.then((val) => document.write(`${val}<br>`), (err) => document.write(`${err}<br>`));
