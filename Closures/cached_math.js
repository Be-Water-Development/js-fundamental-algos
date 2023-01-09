// Create a function that takes a parameter and a function and returns the time it took
// for the callback function to fire. If the callback and parameter are exactly the same
// returned the cached time value; don't run the function again.
cachedTimeIt = () => {
  return (time, callback) => {}
}

// The callback
const countDown = (number) => {
  while (number > 0) {
    number--;
    console.log(number);
  }
};

const innerFunc = cachedTimeIt();
const shouldExecuteCallback = innerFunc(10000, countDown)
const shouldNOTExecuteCallback = innerFunc(10000, countDown)  // params are the same -- so just returned timed value, don't execute
