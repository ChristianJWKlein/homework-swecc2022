//Given a sentence reverse order: "the sky is blue" -> "blue is sky the".
let string = "the sky is blue";

//Can turn this into an array of words.  then reverse the array of words.
//.split("delimiter")...In this case we can use "space"

let arrString = string.split(" ");
//console.log(arrString);

//now we "reverse" it.

const arrReverse = arrString.reverse();
//console.log(arrReverse);

//then we can join the array with .join("delimiter")... send in space again.

let finalString = arrReverse.join(" ");
console.log(finalString);
