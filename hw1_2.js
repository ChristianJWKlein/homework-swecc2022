//Homework will help you practice loops, arrays, objects, and functions.

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

function numTrue(arr) {
  let counter = 0;
  for (bool of arr) {
    if (bool) {
      counter++; //counter +=  1
    }
  }
  return counter;
}

console.log(numTrue(testArray));

//bool means true... so !bool means false.

//2. Write a function that receives a car object as an argument and outputs the car's make and model.

const car = {
  Make: "Ford",
  Model: "F-150",
  Color: "Blue",
};

function whatCar(automobile) {
  //console.log(car.Make);
  //console.log(car.Model);
  console.log(
    `The cars Make is: ${car.Make} and it's model is a ${car.Model}. 'AKA' Blue Lightning`
  );
}

whatCar();
/*
//3. Write a function to get the first element in an array
const whatever = [9, 9, 8, 45, 7];

function getFirstElement(roo) {
  console.log(whatever[0]);
}
getFirstElement();
*/
