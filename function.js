//add two numbers together
// a function with two parameters

/*/////My answer below: Could have been simplified.

function sumTwoNumbers(a, b) {
  const sum = a + b;
  return sum;
}
let product = sumTwoNumbers(17.25, 0.07);
console.log(product);
*/

/*
function addition(a, b) {
  return a + b;
}
console.log(addition(2, 4));
console.log("4 + 7 = ", addition(4, 7));

const totalAge = addition(31, 43);
console.log(totalAge);
console.log("The total of Danielle and Jeremiah's ages are:", totalAge);
*/

function nextAge(age) {
  return age + 1;
}
let myAge = 46;
console.log((myAge = nextAge(myAge))); //changes back to whatever the function nextAge spits out. 47
// above function is implied that age is given and that return is age plus 1.
// But why would we not specify it needs to be input as a number?
