// <<<<<<< HEAD
// Create a function called `timeIt` that takes a callback. 
// `timeIt` should return a function
// that caches how long it took for the callback to run IF 
// its the first time it has been called.
// If the same callback AND the same countdown value is 
// passed to `cachedTimeIt` then the callback should
// NOT be executed again, but instead return the cached timed value.

// Code here

const timeIt = (cb) => {
  // store the cached time value in the closure
  let cachedNum;
  let cachedCb;
  let cachedOutput;
  // return a function
  const innerFunc = (num) => {
    if (!cachedNum) {
      cachedNum = num;
      cachedCb = cb;
      // time how long it takes to run the callback, return that number
      // time before function executes
      const d = new Date ();
      const b = d.getTime()
      // run the function
      cb(num)
      // time after the function executes
      const de = new Date ()
      const e = de.getTime()
      console.log(`Beginning and end times: ${b}, ${e}`)
      // return a sentence with the output
      cachedOutput = e - b
      return `The callback took ${cachedOutput} ms to run with an input of ${num}.`
    } else if (cachedNum === num && cachedCb === cb) {
      return `Cached countdown value: ${cachedOutput} ms.`;
    } else {
      // time how long it takes to run the callback, return that number
      const d = new Date ();
      const b = d.getTime()
      // run the function
      cb(num)
      // time after the function executes
      const de = new Date ()
      const e = de.getTime()
      console.log(`Beginning and end times: ${b}, ${e}`)
      // return a sentence with the output
      const sentence = `The callback took ${e - b} ms to run with an input of ${num}.`
      return sentence
    }
  } 
  return innerFunc
};

// The callback

const countDown = (number) => {
  console.log ("Running the callback!")
  while (number > 0) {
    // check if the callback is being invoked
    if (number < 10) {
      console.log(number)
    }
    number--;
  }
  console.log('The countdown is complete and the callback ran.')
};

// Test a second callback

const countUp = (number) => {
  console.log ("Running the callback!")
  while (number < 2000) {
    // check if the callback is being invoked
    if (number > 1990) {
      console.log(number)
    }
    number++;
  }
  console.log('The countdown is complete and the callback ran.')
};

const cachedTimeIt = timeIt(countDown);
const timeItAgain = timeIt(countUp)

const output1 = cachedTimeIt(1000); // should return timed value
console.log("Output1:", output1);
const output2 = cachedTimeIt(1000); // should return cached timed value without running the function
console.log("Output2:", output2);
const output3 = cachedTimeIt(2000); // should invoke the cb and return timed value (different number input)
console.log("Output3:", output3);
const output4 = cachedTimeIt(1000); // should return the same as output 2
console.log("Output4:", output4);
const output5 = timeItAgain(30); // should return the timed value (different cb)
console.log("Output5:", output5);
const output6 = timeItAgain(30); // should be same as Output 5
console.log("Output6:", output6)

