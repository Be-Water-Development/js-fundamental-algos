// Create a function that takes a parameter and a function and returns the time it took
// for the callback function to fire. If the callback and parameter are exactly the same
// returned the cached time value; don't run the function again.

// The function

const cachedTimeIt = (param, cb) => {
  // closure
  let cachedValue;
  let cachedCb;
  const countSeconds = (...params) => {
    // check if the passed in cb and param are equal to the cached ones
    if (cachedValue === param && cachedCb === cb) {
      // console.log(cachedValue)
      return cachedValue
    } else {
      cachedValue = param;
      cachedCb = cb;
      // console.log(cachedValue)
      // return the time in seconds it took the cb to fire
      setTimeout(cb, param*1000, ...params)
    }
  }
  return countSeconds
}


// The callback
const countDown = (number) => {
  while (number > 0) {
    number--;
    console.log(number);
  }
};

// I added the cb param to cachedTimeIt here, "...takes a param and a function..."
const output1 = cachedTimeIt(100, countDown); // should return timed value
// Don't we need to invoke output1? Invoking with 100 achieves the console log 
// from the inner function
console.log(output1());
const output2 = cachedTimeIt(100, countDown); // should return cached timed value without running the function
// if using closure, this just returns the function definition
console.log(output2);
const output3 = cachedTimeIt(100, countDown); // should return same at output2
console.log(output3);
