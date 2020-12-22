// We are assigned the task to implement a range function that returns an array of integers beginning and ending with specified start and end numbers.
// When only a single argument is provided, that argument should be used as the ending number
// and the starting number should be 0.

// Check our code below. Why do the example invocations fail with an error saying Maximum
// call stack size exceeded? Can you fix the code, so
// it runs without error and satisfies the requirements?

function rangeLoop(start, end) {
  const range = [];

  for (let element = start; element <= end; element++) { 
    range.push(element);
  }

  return range;
}

function range(start, end) {
  if (!end) { //set conditional to see if only one parameter is given
    end = start; //assigned end value to start value 
    start = 0; //reassigned start to zero 
  }
  return rangeLoop(start, end); //changed name of range to rangeLoop, range was stuck calling itself in infinite loop 
}

// Examples

console.log(range(10, 20)); // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(range(5)); // [ 0, 1, 2, 3, 4, 5 ]
