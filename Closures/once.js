// Write a function once that accepts a callback as input and returns a 
// function. When the returned function is called the first time, it 
// should call the callback and return that output. If it is called 
// any additional times, instead of calling the callback again it will 
// simply return the output value from the first time it was called.

// ADD CODE HERE

// declare function once that accepts a cb as a parameter
const once = (cb) => {
  // store if the cb has been called in the closure
  let calledCache;
  // store the value of the first time the callback was called
  let numCache;
  // we don't know how many params the cb will take, so use ...args
  const innerFunc = (...args) => {
    // check if calledCache is falsy
    if (!calledCache) {
      // set calledCache to true
      calledCache = true
      // set the number cache to the output of the callback, then return it
      numCache = cb(...args)
      return numCache
    } else {
      return numCache
    }
  }
  return innerFunc
};

const addByTwoOnce = once(function (num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5, 34)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7
