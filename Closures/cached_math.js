// Create a function called `timeIt` that takes a callback. `timeIt` should return a function
// that caches how long it took for the callback to run IF its the first time it has been called.
// If the same callback AND the same millisecond value is passed to `cachedTimeIt` then the callback should
// NOT be executed again, but instead return the cached timed value.
// Code here


const timeIt = (callback) => {
  let storedCb; 
  let storedNum; 
  let cachedTime; 
  let run = false;

  if (run == true) {return "this function has already been run"}

  console.log(storedCb, storedNum)

  return function (num) {
      
      if (!run) {
        storedCb = callback;
        storedNum = num;
        run = true; 
        console.log("isthisworking")
      }
      
      
     // console.time('t')

    //  callback(num);
     
    //  cachedTime = console.timeEnd('t')
    return "we are testing this"; 
    }
    
    

  }

  







// The callback
const countDown = (number) => {
  while (number > 0) {
    number--;
  }
};



const cachedTimeIt = timeIt(countDown);
const output1 = cachedTimeIt(100); // should return timed value
console.log(output1);
const output2 = cachedTimeIt(100); // should return cached timed value without running the function
console.log(output2);
const output3 = cachedTimeIt(100); // should return same at output2
console.log(output3);