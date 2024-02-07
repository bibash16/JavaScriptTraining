const hobbies = ['Sports', 'Cooking'];

//const copiedArray = hobbies.slice();
//const copiedArray = [hobbies]; 
/*
doesnt exactly copy the array, 
copies a new array with the existing
array inside it
*/
const copiedArray = [...hobbies];
/*
spread: pulls out elemnts fro m
existing array and copies onto the new array
one by one
*/
console.log(copiedArray);

// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// }
// console.log(toArray(1, 2, 3, 4));
/*
passing extra arguements wont show in execution
use REST (... arg)
bundles up the array

*/
const toArray = (...args) => {
    return args;
}
console.log(toArray(1, 2, 3, 4));
