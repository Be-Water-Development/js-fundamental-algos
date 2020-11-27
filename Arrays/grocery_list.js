// We have made a grocery list, and as we check off items on that list, 
// we would like to remove them.

// Write code that removes the items from 'groceryList' one by one,
// until it is empty. If you log the elements you remove,
// the expected behavior would look as follows.

let groceryList = [
  "paprika",
  "tofu",
  "garlic",
  "quinoa",
  "carrots",
  "broccoli",
  "hummus",
];

// Your code.

// Iterate through the array
// we need to reverse the array and iterate backwards, using arr.pop()

const checkOffItems = (arr) => {
  // reverse the array
  arr.reverse()
  // write a backwards for loop to iterate backwards through the array
  for (let i = arr.length - 1; i >= 0; i--) {
    // log the elements as they're removed
    console.log(arr[i])
    // pop off the last element in the array
    arr.pop()
  }
  // return the empty array
  return arr
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus


// check answers

console.log("func output:", checkOffItems(groceryList)) // []
console.log("list output:", groceryList); // []


// Things I tried that did not work

// why didn't this work? mutating the array affected the index

 // also use the index and object params in forEach
 // arr.forEach((el, index, arr) => {
  // log the element to the console
  // console.log(el)
  // arr.splice(index, 1)
  // console.log(arr)
// })



