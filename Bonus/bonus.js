// Creates a clone of an object.
const users = [{ user: "barney" }, { user: "fred" }];
const shallowClone = clone(users);
console.log("-----Clone Test Cases-----");
console.log(shallowClone[0] === users[0]); // true
console.log("Shallow clone: ", shallowClone);

function clone(value) {
  return value.map((obj) => {
    return obj;
  });
}

// nice

// Return the size of collection. If the argument passed is an array, then return
// the length of the array. If the argument passed is an object, then return the
// number of key/value properties.
console.log("-----Size of Collection Test Cases-----");
console.log(size([1, 2, 3])); // 3
console.log(size({ a: 1, b: 2 })); // 2
console.log(size(4)); //

// same functionality; little  cleaner read, but good stuff
function size(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  }

  if (typeof collection === "object") {
    return Object.keys(collection).length;
  }

  return "Collection was not array or object.";
}

// Returns the first element of an array without modifying the original array.
// Returns undefined if array is empty
console.log("-----First Test Cases-----");

// could also do a ternary here...gets it down to one line without sacrificing readability
const first = (array) => (array.length === 0 ? undefined : array[0]);

console.log(first([1, 2, 3])); // 1
console.log(first([])); // undefined

// Peter: I modified your code to be an arrow function to allow myself the chaance to write it with an implicit return and on one line,
// but it broke because i invoked the function via the console.log(first(...)) before the function was defined.
// but in all the rest of the functions you invoke it before its defined without issue...whats the deal... look up `hoisting`

// Creates a slice of array with n elements dropped from the beginning.
// n defaults to 1
console.log("-----Drop Test Cases-----");
console.log(drop([1, 2, 3])); // [2, 3]
console.log(drop([1, 2, 3], 2)); // [3]
console.log(drop([1, 2, 3], 5)); // []
console.log(drop([1, 2, 3], 0)); // [1, 2, 3]

// very nice
function drop(array, n = 1) {
  return array.slice(n);
}

//Creates a slice of array with n elements taken from the beginning.
//n defaults to 1
console.log("-----Take Test Cases-----");
console.log(take([1, 2, 3])); // [1]
console.log(take([1, 2, 3], 2)); // [1, 2]
console.log(take([1, 2, 3], 5)); // [1, 2, 3]
console.log(take([1, 2, 3], 0)); // []

// yep
function take(array, n = 1) {
  return array.slice(0, n);
}

// Gets the value of key from all elements in collection.
console.log("-----Pluck Test Cases-----");
console.log(
  pluck(
    [
      { user: "Bob", age: 20 },
      { user: "Sam", age: 25 },
    ],
    "user"
  )
);
// ['Bob','Sam']

// good stuff
function pluck(array, key) {
  return array.map((obj) => {
    return obj[key];
  });
}

// Assigns own enumerable properties of source object(s) to the destination
// object. Subsequent sources overwrite property assignments of previous sources.
console.log("-----Extend Test Cases-----");
console.log(extend({ user: "barney" }, { age: 40 }, { user: "fred" }));
// should return ->  { 'user': 'fred', 'age': 40 }
// BONUS: solve with reduce

// good stuff
function extend(...objs) {
  return objs.reduce((acc, obj) => {
    for (const property in obj) {
      acc[property] = obj[property];
    }
    return acc;
  }, {});
}

// Using a for loop, call the functions in the queue in order with the input
// number, where the results of each function become the next function’s input.
// Additionally, the queue should be empty after the function is called.
const puzzlers = [
  function (a) {
    return 8 * a - 10;
  },
  function (a) {
    return (a - 3) * (a - 3) * (a - 3);
  },
  function (a) {
    return a * a + 4;
  },
  function (a) {
    return a % 5;
  },
];
const start = 2;
console.log("-----Apply and Empty Test Cases-----");
console.log(applyAndEmpty(2, puzzlers)); // 3

//very nice
function applyAndEmpty(input, queue) {
  queue.reverse(); // modifies the input array ---> haha this is funny your brain likes traversing this way :-)
  for (let i = queue.length - 1; i >= 0; i--) {
    input = queue[i](input);
    queue.pop();
  }
  console.log("Queue is empty: ", queue);
  return input;
}

// Returns a function that when called, will check if it has already computed
// the result for the given argument and return that value instead if possible.

//good stuff; hard problem; changed the code smell to be more professional, with a few notes
function memoize(func) {
  let cache = {};
  return (num) => {
    // so this line...
    // if (Object.keys(cache).includes(num.toString())) { ...
    // is a little difficult to read, and involves 2 traversals of the array
    // in time complexity that squared twice...for every element you add you have to traverse that element
    // twice more, once with Object.keys() and again in .includes().. two array functions that have to hit every element
    // much quicker would be to...

    if (cache[num.toString()]) {
      // --> if the cache has it aka its defined then its truthy and thus we enter the if, if its not there its undefined, thus falsey, skip the if
      console.log("Retrieving from the cache.");
      return cache[num];
    }

    console.log("Running the function."); //love the consoles to make sure we are correct
    cache[num] = func(num);
    return cache[num];
  };
}

const subtractByTwo = memoize((x) => x - 2);

console.log("-----Memoize Test Cases-----");
console.log(subtractByTwo(3));
console.log(subtractByTwo(5));
console.log(subtractByTwo(5));
console.log(subtractByTwo(3));
console.log(subtractByTwo(8));

// Invokes func after wait milliseconds. Any additional arguments are provided
// to func when it is invoked.

//very very nice
function delay(func, wait) {
  const inner = (...args) => {
    setTimeout(func, wait, ...args);
    return `Running the callback after ${wait / 1000} second(s).`;
  };
  return inner;
}

// const addTenDelayOneSecond = delay(x => console.log(x + 10), 1000)
const addFortyDelayFiveSeconds = delay((x) => console.log(x + 40), 5000);

console.log("-----Delay Test Cases-----");
// console.log(addTenDelayOneSecond(50))
console.log(addFortyDelayFiveSeconds(300));
