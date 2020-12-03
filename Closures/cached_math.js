// Create a function called `timeIt` that takes a callback. 
// `timeIt` should return a function
// that caches how long it took for the callback to run IF 
// its the first time it has been called.
// If the same callback AND the same millisecond value is 
// passed to `cachedTimeIt` then the callback should
// NOT be executed again, but instead return the cached timed value.



// Code here
const timeIt = (cb) => {
  // store the cached time value in the closure
  let cachedNum;
  let cachedCb;
  // return a function
  const innerFunc = (num) => {
    if (!cachedNum) {
      cachedNum = num;
      cachedCb = cb;
      // use setTimeout to take num ms to run the cb
      setTimeout(cb, num, num)
      return num
    } else if (cachedNum === num && cachedCb === cb) {
      return cachedNum;
    } else {
      // invoke the callback and setTimeout to num ms
      // return num
      setTimeout(cb, num, num)
      return num
    }
  } 
  return innerFunc
};
// The callback
const countDown = (number) => {
  while (number > 0) {
    // check if the callback is being invoked
    console.log(number)
    number--;
  }
};

const cachedTimeIt = timeIt(countDown);

const output1 = cachedTimeIt(1000); // should return timed value
console.log(output1);
const output2 = cachedTimeIt(1000); // should return cached timed value without running the function
console.log(output2);
const output3 = cachedTimeIt(500); // should invoke the cb and return timed value
console.log(output3);
const output4 = cachedTimeIt(1000); // should return the same as output 2
console.log(output4);

