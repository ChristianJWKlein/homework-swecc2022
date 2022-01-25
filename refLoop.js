//create an array named "myArray" with desired length and filled with random numbers.

function genArr(length) {
  const arr = [];
  for (let i = 0; i <= length; i++) {
    const myNum = Math.ceil(Math.random() * 100);
    arr.push(myNum);
  }
  return arr;
}

const myArray = genArr(25); //can take an additional two arguments. (length, ,)
console.log(myArray);

//Nested If statment inside temprate litterals

const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
// expected output: "The word "fox" is in the sentence"
