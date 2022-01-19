//1. Create a function that returns the number of true values there are in an array.

const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];

let count = 0; // let count = 0 can not be in function.  Otherwise it would reinitialize every time. costly.

function countTrue(arr) {
  for (let i = 0; i < arr.length; i++) {
    //increment for loop, count values in array
    if (arr[i] !== true) {
      //can put = 1 = true = bool
      //when i = 0, we grab first element of array
      count++;
    }
  }
  return count;
}

//console.log(countTrue(testArray));
console.log(`There are ${countTrue(testArray)} false values`);
