// Create a function subtractTwo(timesFive????) that accepts a number and returns that number minus 2.(number times five)
// Then create a function map that takes two inputs -

// an array of numbers (a list of numbers)
// a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
// Have your map function return a new array filled with numbers that are the result of using the 'callback'
// function on each element of the input array. Please do not use the native map or forEach method.

// ADD CODE HERE

//declare a function timesfive, takes a number as input.
function timesFive(num) {
  return num * 5;
}

//delcare a function map, takes an array and a callback
function map(array, callback) {
  //delcare an empty array to store results in
  let outArray = [];
  //using a for loop, loop through the array, pushing the callback of each element into the outArray
  for (let i = 0; i < array.length; i++) {
    outArray.push(callback(array[i]));
  }
  //return the outArray
  return outArray;
}

// Uncomment these to check your work!
//console.log(typeof timesFive); // should log: 'function'
//console.log(typeof map); // should log: 'function'
//console.log(map([3,4,5], timesFive)); // should log: [ 15, 20, 25 ]
