// Write a function once that accepts a callback as input and returns a
// function. When the returned function is called the first time, it
// should call the callback and return that output. If it is called
// any additional times, instead of calling the callback again it will
// simply return the output value from the first time it was called.

// ADD CODE HERE

const once = (cb) => {
  let calledCache;
  let numCache;
  const innerFunc = (...args) => {
    // yep there we go, falsey vs truthy
    if (!calledCache) {
      calledCache = true;
      numCache = cb(...args);
      return numCache;
    } else {
      return numCache;
    }
  };
  return innerFunc;
};

const addByTwoOnce = once(function (num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5, 34)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7

//great work
