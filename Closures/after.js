// Write a function after that takes the number of times the callback
//  needs to be called before being executed
// as the first parameter and the callback as the second parameter.

// ADD CODE HERE


// declare function after, num and callback as parameters 
function after (num, callback) {
  //set a counter equal to 0
  let counter = 0; 
  //set an interior function, string as parameter 
  return function (...string) {
    //increment counter by one on each pass
    counter ++
    //if the counter is equal to the num passed in, return the callback of the string 
    if (counter >= num) {
      return callback(...string)
    }
  }
}

const called = function (string) {
  return "hello " + string;
};
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
 console.log(afterCalled('world')); // -> undefined is printed
 console.log(afterCalled('world')); // -> undefined is printed
 console.log(afterCalled('world')); // -> 'hello world' is printed
