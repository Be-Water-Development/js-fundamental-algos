// Write a function after that takes the number of times the callback
//  needs to be called before being executed
// as the first parameter and the callback as the second parameter.

// ADD CODE HERE

const after = (num, cb) => {
  let counter = 0;
  return (...params) => {
    counter++;
    if (counter >= num) {
      return cb(...params);
    }
  };
};

const called = function (string) {
  return "hello " + string;
};
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> 'hello world' is printed

// very nice well done, i modified one code smell thing, very small
