// We are assigned the task to implement a range function that returns an
// array of integers beginning and ending with specified start and end numbers.
// When only a single argument is provided, that argument should be used as the
// ending number
// and the starting number should be 0.

// Check our code below. Why do the example invocations fail with an
// error saying Maximum
// call stack size exceeded? Can you fix the code, so
// it runs without error and satisfies the requirements?

// The issue is that range is defined twice, and the second function definition
// - the one with only the end parameter, overrides the first one. Then, this
// function calls itself recursively with no end and maxes out the call stack.
// The solution is to write in logic to the first range function to handle scenarios
// where only one parameter is passed in.

function range(start, end) {
  const range = [];
  if (arguments.length === 2) {
    for (let element = start; element <= end; element++) {
      range.push(element);
    }
  } else if (arguments.length === 1) {
    for (let element = 0; element <= start; element++) {
      range.push(element);
    }
  } else {
    return "Too many parameters passed in.";
  }

  return range;
}

// Original range function

// function range(start, end) {
//   const range = [];

//   for (let element = start; element <= end; element++) {
//     range.push(element);
//   }

//   return range;
// }

// Debug
// console.log(range.toString()) // logs the definition from the function below

// function range(end) {
//     return range(0, end);
//   }

// Debug
// console.log(range.toString()) // logs the definition from the function above

// this is because "JavaScript supports overriding not overloading, meaning,
// that if you define two functions with the same name, the last one defined
// will override the previously defined version and every time a call will
// be made to the function, the last defined one will get executed."

// Examples

console.log(range(10, 20));
// Debug
// Make sure range() works with 0 passed in as the start
// console.log(range(0, 5)); // [ 0, 1, 2, 3, 4, 5 ]
console.log(range(5));
console.log(range(3, 89, 587));

// thumbs up
