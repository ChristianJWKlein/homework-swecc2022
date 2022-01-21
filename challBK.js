/*print the numbers from 1 to 16
when a number is divisible by 3 print ‘fizz’
when a number is divisible by 5 print ‘buzz’
when a number is divisible by both print ‘fizzBuzz’
*/

function printNum(num) {
  for (let i = 1; i < 17; i++) {
    console.log(i);
  }
}
printNum();

function fizzBuzz(num) {
  if (num % 15 === 0) {
    console.log("fizzBuzz");
  } else if (num % 3 === 0) {
    console.log("fizz");
  } else if (num % 5 === 0) {
    console.log("buzz");
  } else {
    console.log("your number is not divisble by 5 or 3");
  }
}

const n = 60;
fizzBuzz(n);
