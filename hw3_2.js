//You are given 2 arrays, one called shoppingList and one called cart.
//Create a new version of shoppingList where the items in the cart have been removed.

//The below function aims to take in two arrays and remove "strings of same value" to produce a live list of items needed to finish the grocery store trip.  The function returns a new array with a newList that contains only the items that have not yet made it into your cart.  The .filter method is used here.  An Asynchronous function.  Below, we filter "list" or pass it as our 1st parameter.  On the other side of the => we avoid using {}.  We then seek to know what elements in our cart array are also in our list array.  The function does this and then we store it into a constant as our New Shopping List...BUT..we put !cart.icludes(item)....Key "key" !....so that we return the items that are NOT in the Cart and List... thus..returning the list of item we need to add to our cart to complete our grocery store run.

const list = ["bread", "eggs", "milk", "beer", "peanuts", "shampoo", "spinach"];
const cart = ["apples", "bananas", "bread", "peanuts", "milk"];

// const newShoppingList = list.filter((item) => !cart.includes(item));

// console.log(newShoppingList);

// second solution
//In this scenario, we create an empty list (array) which we fill with the elements or gorcery store items we need to complete our trip. We used a for of loop to test the items of the parameter array we pass into the function. To do this, we set the if condition of the passed array to test if the items in the cart DO NOT Match the items in the List.  Those items that match that criteria are then .push(ed) into the empty array which we defined as newList.

let newList = [];
for (let item of list) {
  if (!cart.includes(item)) {
    newList.push(item);
  }
}
console.log(newList);
