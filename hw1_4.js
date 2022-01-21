// 1. Write a loop that outputs
// 10
// 9
// 8
// ...(7 through 3)
// 2
// 1
// BlAST OFF!

let i = 10;
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("BlAST OFF!");

//without using Math.max or Math.min, output the min and max values of an array of numbers.

theArray = [4, 5, 6, 6, 777, 6, 6, 4, 3, 9, 2, 2];

function minMaxArray(arr) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(`the min value is ${min} and the max value is ${max}`);
}

minMaxArray(theArray);

//create a function that takes an array of numbers & return both min and max in that order. use a loop.

function minMaxFinder(arr) {
  //the Math.min and Math.max functions use a loop
  console.log(Math.min(...arr));
  console.log(Math.max(...arr));
}
minMaxFinder(theArray);

//
//create a function that takes an array of numbers & return both min and max in that order. use a loop.

function aDifMinMaxFinder(arr) {
  let min = arr[0];
  let max = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }

    return [min, max];
  }
}
aDifMinMaxFinder(theArray);

// 1. Converts a string to uppercase letters:
let str = "WHAT a TIME to BE ALIVE!";
let upStr = str.toUpperCase();

console.log(upStr);
