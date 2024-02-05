// let numbers = [1,2,3,4,5];
// console.log(numbers)

// let fruits =['apples', 'bananas','oranges']
// console.log(fruits);

// let cars = new Array('pagani', 'nissan', 'toyota');
// console.log(cars);


// console.log(cars[2]);
// cars[0] = 'Merc';
// console.log (cars);

// fruits.push('cherry');    //add new item to array
// console.log(fruits);
// console.log(fruits.length); // checking the length of array

// let x;
// for(x in fruits){
//     console.log(fruits[x]);
// }

// for (x of fruits){
//     console.log(x);
// }

let fruits = ['apple', 'banana', 'grape'];
console.log(fruits);

fruits.pop();
console.log(fruits);//to remove smth from the array from the back
fruits.shift(); // to remove from the first index in array
console.log(fruits);

fruits.push('Cherry');  // to add item from the back of the array
console.log(fruits);

fruits.unshift('lemons'); // to add items from the front of the array
console.log(fruits);

delete fruits[1]; //to delete numbered index
console.log(fruits);

fruits[1] = 'Oranges';
console.log(fruits);

//           splice (starting index, number of items to remove)
fruits.splice(1, 2);   //to remove items from array(accor to index no)
console.log(fruits);

fruits.splice(2, 0, 'Orange', "cherry");  //to add stuff
console.log(fruits);

let citrusFruits = fruits.splice(0, 2) // splicing and adding onto new array
console.log(fruits);
console.log(citrusFruits);

let evenNumbers = [2, 4, 6];
let oddNumbers = [1, 3, 5];

let numbers = evenNumbers.concat(oddNumbers); // to combine arrays easily
console.log(numbers);

