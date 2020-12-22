// Add code to the function neitherFilter in the place marked "ADD CODE HERE" in order to
// achieve the desired console logs.
// The array returned from neitherFilter should contain only the
// elements in the passed-in array that yield a falsey return value when
// passed into BOTH of the two callbacks passed into neitherFilter.

// Create two callbacks that return truthy or falsey values

//declare function cb1, truthy values are in all uppercase
function cb1(item) {
  if (item === item.toUpperCase()) {
    return item;
  }
}

//declare function cb2, truthy values include "o"
function cb2(item) {
  if (item.includes("o")) {
    return item;
  }
}

//declare the function neitherFilter, takes array and two callbacks as parameters
const neitherFilter = (arr, first, second) => {
  //declare an empty array to push results into
  let outArray = [];
  //using forEach, flip over each item, if the element is a falsey return value of both the callbacks, push into outArray.
  arr.forEach((ele) => {
    if (ele !== first(ele) && ele !== second(ele)) {
      outArray.push(ele);
    }
  });
  //return the outArray
  return outArray;
};

//uncomment for tests
//console.log(neitherFilter(["a", "b", "c", "D", "O", "o"], cb1, cb2)); // logs: [ 'a', 'b', 'c' ]
//console.log(neitherFilter(["frogs", "GREEN", "green", "TREE", "tree", "FROGS"], cb1, cb2)) // logs [ 'green', 'tree' ]
