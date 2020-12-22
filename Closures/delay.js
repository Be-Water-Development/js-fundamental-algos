// Write a function delay that accepts two arguments, a callback and the wait time in milliseconds.
// Delay should return a function that,
// when invoked waits for the specified amount of time before executing. HINT - research setTimeout();

// ADD CODE HERE

//declare a function delay, callback and time as parameters
function delay(callback, time) {
 
    //return an interior function that takes no parameters 
    return function () {
        //using setTimeout, invoke the callback after time has passed 
      setTimeout(callback, time);
    }
  }

// UNCOMMENT THE CODE BELOW TO TEST DELAY
 let count = 0;
 const delayedFunc = delay(() => count++, 1000);
 delayedFunc();
 console.log(count); // should print '0'
 setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
