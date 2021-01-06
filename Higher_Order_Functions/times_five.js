// Create a function subtractTwo that accepts a number and returns
// that number minus 2.

// Then create a function map that takes two inputs -

// an array of numbers (a list of numbers)
// a 'callback' function - this function is applied
// to each element of the array (inside of the function 'map')
// Have your map function return a new array filled with numbers
// that are the result of using the 'callback'
// function on each element of the input array. Please do not use
// the native map or forEach method.

// ADD CODE HERE

const subtractTwo = (num) => num - 2;

const timesFive = (num) => num * 5;

const map = (arr, cb) => {
  let outArr = [];
  for (let i = 0; i < arr.length; i++) {
    outArr.push(cb(arr[i]));
  }
  return outArr;
};

// Uncomment these to check your work!
console.log(typeof timesFive); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], timesFive)); // should log: [ 15, 20, 25 ]

//yep
