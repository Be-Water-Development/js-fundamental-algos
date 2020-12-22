// Create a function called `timeIt` that takes a callback. `timeIt` should return a function
// that caches how long it took for the callback to run IF its the first time it has been called.
// If the same callback AND the same millisecond value is passed to `cachedTimeIt` then the callback should
// NOT be executed again, but instead return the cached timed value.
// Code here

//declare function timeIt, takes a callback
const timeIt = (callback) => {
  //declare variables to store values from first function run in.
  let run = false;
  let firstCb;
  let firstNum;
  let result;

  //return function
  return function (num) {
    //if function has been run, and same values are passed in again, return previous result
    if (run === true && firstCb === callback && firstNum === num) {
      return `This function has already been run: ${result}`;
    }

    //if the function has been run, and the same values are not passed in, reset the function.
    if (firstCb !== callback && firstNum !== num) {
      run == false;
    }

    //if function has not been run, assign the variables values to store in the closures of the first function
    if (!run) {
      firstCb = callback;
      firstNum = num;
      run = true;

      //start timer
      let start = Date.now();

      console.log(callback(num)); //this returns 11 ms
      //callback(num);  //this returns 0 ms

      //end timer
      let end = Date.now();

      //assing result millisecond value
      result = `This function takes ${end - start} ms to run`;
    }

    //return result
    return result;
  };
};

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

//console.log(callback(num)) returns:
//undefined
//This function takes 11 ms to run
//This function has already been run: This function takes 11 ms to run
//This function has already been run: This function takes 11 ms to run

//callback(num) returns:
//This function takes 0 ms to run
//This function has already been run: This function takes 0 ms to run
//This function has already been run: This function takes 0 ms to run

// What is currently happening in your code?
//I have an issue with my callback being run in the return function. Since the callback does not return anything, I am just wanting the countdown to run,
//then time the value. I think my disconnect is getting the callback to run without console.logging the callback.

//What do you think should be happening with your code?
//Callback(num) should run without console.logging it. I should be getting a timed value regardless of console logging.

//Why do you think your code is breaking?
//I am not invoking the callback function correctly. I am not sure how else to implement it.

//what resources have you attempted to utilize?
//https://www.techiedelight.com/measure-execution-time-method-javascript/
//https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
