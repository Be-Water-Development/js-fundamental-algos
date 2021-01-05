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

// This is correct- exactly the input we are looking for- better to use a for loop rather than a higher order function like ForEach or map
// because we are mutating the array in real time. The only thing here is it would be better to count up to
// arr.length with i starting as zero rather than the other way around becuase it saves you the arr.reverse()
// which is a full traversal of the array-- exponentially adding time complexity as your array grows.
const checkOffItems = (arr) => {
  arr.reverse();
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
    arr.pop();
  }
  return arr;
};

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

// check answers

console.log("func output:", checkOffItems(groceryList)); // []
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
