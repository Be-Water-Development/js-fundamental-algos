// Create a function that takes a parameter and a function and returns the time it took
// for the callback function to fire. If the callback and parameter are exactly the same
// returned the cached time value; don't run the function again.

// The callback
const countDown = (number) => {
  while (number > 0) {
    number--;
    console.log(number);
  }
};

const output1 = cachedTimeIt(100); // should return timed value
console.log(output1);
const output2 = cachedTimeIt(100); // should return cached timed value without running the function
console.log(output2);
const output3 = cachedTimeIt(100); // should return same at output2
console.log(output3);
