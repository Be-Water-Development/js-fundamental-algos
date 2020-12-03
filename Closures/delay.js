// Write a function delay that accepts two arguments, 
// a callback and the wait time in milliseconds.
// Delay should return a function that,
// when invoked waits for the specified amount 
// of time before executing. HINT - research setTimeout();

// ADD CODE HERE

// delay accepts two arguments
const delay = (cb, wt) => {
    // use setTimeout on the callback in the inner function
    // doesn't take any arguments, uses args in the closure
    const innerFunc = () => {
        // setTimeout
        // setTimeout doesn't return anything here, the console.log()
        // logs the incremented count variable after 1 second
        return setTimeout(cb, wt) 
        
    }
    return innerFunc
}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
