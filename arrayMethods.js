// First things first. An array is an ordered collection of values. The values can be strings, numbers, booleans, and even other arrays (this would lead to a nested array).

// Arrays are indexed; the index dictates the order and begins at 0. Arrays come with built-in methods that allow you to modify them and access their values.

// To access a specific element in an array use bracket notation along with its index value.

let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let petList = ["toys", "food", "water", "bowls", "beer", "collars"];

shoppingList[0]; // returns celery

//1. use the shoppingList array to practice your array methods.
//example:
//shoppingList.push(); //adds an element to the end of the array.
//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];

//shoppingList.push("salt");
//shoppingList is now ["celery", "limes", "lemons", "grenadine", "oranges", "salt"]

//shoppingList.pop(); // removes the last element in the array and returns that element. [ 'celery', 'limes', 'lemons', 'grenadine', 'oranges' ]

//shoppingList.unshift(); // adds a new element at the beginning of the array. [ 'key Limes', 'celery', 'limes', 'lemons', 'grenadine', 'oranges' ]

//shoppingList.shift(); //→ removes the first element in an array and returns that element. [ 'limes', 'lemons', 'grenadine', 'oranges' ]
// shoppingList.forEach((item) => {
//   console.log(item + " for Tom ");
// }); //→ calls a function once for each element in the array.

// const wowMap = petList.map((item) => {
//   return {
//     item,
//     dog: "oshkosh",
//   };
// }); //→ transforms the elements in the original array by calling the given function once for each element in the array.

let refinedList = shoppingList.filter((items) => items === "limes"); // → creates a new array with only the elements that pass the test in a given function.

const findMethod = shoppingList.find((items) => {
  if (items.includes("celery"));
}); //→ returns the first element in an array that passes a test given as a function.

//shoppingList.reduce((items => ); //→ executes a given function for each value of the array and returns a single value.
// shoppingList.includes(); //→ determines whether an array has a specific element.
// shoppingList.indexOf(); //→ search the array for a specific element and returns its first index.
// shoppingList.findIndex(); //→ returns the index of the first element in an array that passes the test in a given function.
// shoppingList.every(); //→ checks if all elements in an array pass a test given as a function

//findMethod;
console.log(refinedList);
