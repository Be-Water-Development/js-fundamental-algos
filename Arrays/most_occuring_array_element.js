// Build a function that takes in an array as a parameter.
// Return an object where the key is the element and the value
// is the number of occurrences for the the element that occurs
// the most often in the array. If there are ties return an object
// with all the highest occuring elements. If the paramenter passed
// in is not an array return null

const arr = [1, 4, 5, 3, 6, 7, 7, 4, 7, 7, 9, 9, 9, 9];
const obj = { feet: "smelly" };

const mode = (arr) => {
  // love the guard clause-- note that else is rarely necessary
  // and code reads cleaner without it
  if (!Array.isArray(arr)) {
    return null;
  }

  let output = {};
  let obj = arr.reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = 1;
    } else {
      acc[val]++;
    }
    return acc;
  }, {});
  const max = Math.max(...Object.values(obj));
  for (const property in obj) {
    if (obj[property] === max) {
      output[property] = max;
    }
  }
  return output;
};

console.log(mode(arr)); // returns { '7': 4, '9', 4 }
console.log(mode(obj)); // returns null

// good work; one thing to add here is your code has greater time complexity than is necessary
// you use reduce which is a loop; then a for loop which again loops and Object.values is a loop as well
// so you are a n to the third power, exponential runs for every element  you add.
// it is possible to do in time length n-- aka a single traversal, though its not worth burning your energy working on it
// something to come back to if you have the inclination
