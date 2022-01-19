/*Pyramid problem:
print:  (using a loop)
#
##
###
####
#####
*/

let firstPound = "#";
let lastPound = firstPound;

console.log(`${firstPound} `);

for (let i = 0; i <= 5; i++) {
  console.log(`${lastPound} `);
  lastPound += firstPound;
}

//Simplified, generic method from Todd
/*
let symbol = "#";
let line = symbol;
for (let i = 0; i < 5; i++) {
  console.log(line);
  line += symbol;
}*/

/*
Extra for experts: 
1. Write a function named assignGrade that takes one argument, a number score.
Returns a grade for the score, either:
 "A," "B," "C," "D," or "F." Call that function for a few different scores and log the result to make sure it works.
 */

function assignGrade(num) {
  switch (true) {
    case num >= 90:
      console.log("A");
      break;
    case num >= 80:
      console.log("B");
      break;
    case num >= 70:
      console.log("C");
      break;
    case num >= 60:
      console.log("D");
      break;
    case num >= 0:
      console.log("F");
      break;
    case num > 100 || num < 0:
      console.log("not a valid score");
      break;
  }
}
assignGrade(60);

/*
//extra code challenge from Juan.  Find the odd numbers in the array and then return the

let arr = [1, 4, 6, 9, 2, 11];
let count = 0;

function findOdds(array) {
  for (let i = 0; i < arr.length; i++) {
    //increment for loop, count values in array
    if (arr[i] % 2 !== 0) {
      
      count++;
    }
  }
  return count;
}
console.log(findOdds(arr));
*/
