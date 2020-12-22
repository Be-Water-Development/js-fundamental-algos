// ADD CODE HERE

//declare function once, takes a callback as the parameter
function once(callback) {
  //set a counter equal to false
  let counter = false;
  //declare an empty variable to store the original value in
  let result;

  //declare an interior function, num as parameter
  return function (num) {
    //if counter is falsey, set it to true
    if (!counter) {
      counter = true;
      //store the result of the callback function in result
      result = callback(num);
      //return the result of callback function
      return callback(num);
    }
    // if counter = true, return original result from first pass
    return result;
  };
}

//const once = () => {};

const addByTwoOnce = once(function (num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5, 34)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7
