// Write a function delay that accepts two arguments,
// a callback and the wait time in milliseconds.
// Delay should return a function that,
// when invoked waits for the specified amount
// of time before executing. HINT - research setTimeout();

// ADD CODE HERE

const delay = (cb, wt) => {
  //what is wt supposed to be?
  const innerFunc = () => {
    return setTimeout(cb, wt);
  };
  return innerFunc;
};

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => console.log("yooo"), 1000);
delayedFunc();
console.log(count); // should print '0' right away
//setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

// look at the modifications i made; you were right i didn't touch your internal logic but line 22  is simply setTimeout, unrelated to the
// functionality we wanted in delay
