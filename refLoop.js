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
