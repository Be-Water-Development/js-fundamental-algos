// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array.
// forEach does not return anything. Please do not use the native forEach or map method.

// Part 2
// Now let's rebuild map from the previous challenge.
// This time instead of using a for loop, you're going to use the forEach we just created.

// ADD CODE HERE

//declare a function for each, takes an array and a callback
function forEach(array, callback) {
  //check to see if input is an array
  if (Array.isArray(array)) {
    //using a for loop, run the callback on each element of the array
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
}

//declare a function map, takes an array and a callback
function map(array, callback) {
  //check to see if input is an array
  if (Array.isArray(array)) {
    // set an outarray equal to an empty array
    let outArray = [];
    //using forEach, pass in an array and a callback, pushing the result into out array
    forEach(array, (ele) => {
      outArray.push(callback(ele));
    });
    //return the outArray
    return outArray;
  }
}

//uncomment for tests
//forEach(['cats','frogs','dogs'], item => console.log(item.toUpperCase())); // should log: CATS, FROGS, DOGS
//console.log(map([1, 2, 3, 4, 5, 6, 7], item => item * 11)); // should log: [11, 22, 33, 44, 55, 66, 77]

//nailed it
