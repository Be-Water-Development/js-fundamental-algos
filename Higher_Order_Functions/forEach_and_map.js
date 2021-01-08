// Create a function forEach which takes an array and a callback,
// and runs the callback on each element of the array.
// forEach does not return anything. Please do not use the native
// forEach or map method.

const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

//nice

// Part 2
// Now let's rebuild map from the previous challenge.
// This time instead of using a for loop, you're going to use
// the forEach we just created.

// ADD CODE HERE

// cb is not used here-- u have hardcoded the 'function' aka the callback so your newMap is really add2toElementsInArray
const newMap = (arr, cb) => {
  let outArr = [];
  forEach(arr, (el) => {
    outArr.push(el + 2);
  });
  return outArr;
};

//this is what we are after- thus cb is dynamic
const alternateMap = (arr, cb) => {
  let outArr = [];
  forEach(arr, (el) => {
    outArr.push(cb(el));
  });
  return outArr;
};

const myArr = [3, 6, 7, 9];
console.log(newMap(myArr, forEach)); // [5, 8, 9, 11]
console.log(alternateMap(myArr, (n) => n + 2)); // [5, 8, 9, 11]
