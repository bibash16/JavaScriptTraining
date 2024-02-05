console.log('Hello World .. !');
console.log(' ..');

// single line comments
/*
multi line
*/
let x, y;
x = 11;
y = 22;
let box = 'welcome';

let res = y + x;
console.log('Result is :' + res);
// ++x to add to the value , --X to decrease from the value
let t = 2 * ++x


// ++x is pre increment meaning immediate action taken,
// x++ would be post increment so after the equation is 
// done the increment would take the value of x

console.log('Value of t is ' + t);

let i;
for (i = 1; i < 5; ++i) {
    console.log('value of i is: ' + i);
}


/* Ternery Operators: similar to if else then
takes 3 arguments 
Condition ? value if its true : value if its false

*/
let a = 11, b = 10;

let result = a > b ? a : b
console.log(result);

// const sales = 'Toyota';
// function carTypes(name) {
//     return name === 'Honda' ? name : "Sorry, we don't sell $(name).";
// }

// const car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

// console.log(car.myCar);
// console.log(car.getCar);
// console.log(car.special);
