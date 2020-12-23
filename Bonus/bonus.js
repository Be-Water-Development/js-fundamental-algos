// Creates a clone of an object.
const users = [{ user: "barney" }, { user: "fred" }];
const shallowClone = clone(users);
//shallowClone[0] === users[0] → true

function clone(value) {
  const clone = [];
  Object.assign(clone, value);
  return clone;
}

//Noley ^^ that can be entirely on one line without sacrificing readability

//console.log(shallowClone); // [ { user: 'barney' }, { user: 'fred' } ]
//console.log(shallowClone[0] === users[0]); // true

// Return the size of collection. If the argument passed is an array, then return
// the length of the array. If the argument passed is an object, then return the
// number of key/value properties.
// size([1,2,3]); → 3
// size({a: 1, b: 2}); → 2
function size(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else if (typeof collection == "object") {
    return Object.keys(collection).length;
  }
}

// Noley ^^ nice, I would not use an if/else but rather many ifs to account for
// the various types... simple cases have a better 'code smell' --> look up this
// term if you are unfamiliar. It's also the style of Redux as you will see in the future

//console.log(size([1,2,3])); // 3
//console.log(size({a: 1, b: 2})); // 2

// Returns the first element of an array without modifying the original array.
// Returns undefined if array is empty
// first([1,2,3]); → 1
// first([]); → undefined

function first(array) {
  return array[0];
}

//Is this right?? Feel like that is too simple...
let arrFirst = [1, 2, 3];
//console.log(first(arrFirst)); // 1
//console.log(first([])); // undefined
//console.log(arrFirst); // [ 1, 2, 3 ]

// Noley: perfect-- .pop() and .shift() and .unshift() mutate, thats the gotcha you survived

// Creates a slice of array with n elements dropped from the beginning.
// n defaults to 1
// drop([1, 2, 3]); → [2, 3]
// drop([1, 2, 3], 2); → [3]
// drop([1, 2, 3], 5); → []
// drop([1, 2, 3], 0); → [1, 2, 3]

function drop(array, n) {
  if (!n && n !== 0) {
    n = 1;
  }
  return array.slice(n);
}

//console.log(drop([1, 2, 3])); //[ 2, 3 ]
//console.log(drop([1, 2, 3], 2)); // [ 3 ]
//console.log(drop([1, 2, 3], 5)); // []
//console.log(drop([1, 2, 3], 0)); // [1, 2, 3]

// Noley -> nice

//Creates a slice of array with n elements taken from the beginning.
//n defaults to 1
// take([1, 2, 3]); → [1]
// take([1, 2, 3], 2); → [1, 2]
// take([1, 2, 3], 5); → [1, 2, 3]
// take([1, 2, 3], 0); → []

function take(array, n) {
  if (!n && n !== 0) {
    n = 1;
  }
  return array.slice(0, n);
}

//console.log(take([1, 2, 3])); //[ 1 ]
//console.log(take([1, 2, 3], 2)); //[ 1, 2 ]
//console.log(take([1, 2, 3], 5)); //[ 1, 2, 3 ]
//console.log(take([1, 2, 3], 0)); //[]

// Noley -> Yessss

// Gets the value of key from all elements in collection.
// pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'); → ['Bob','Sam']

function pluck(array, key) {
  return array.map((ele) => {
    return ele[key];
  });
}

//I originally used forEach, then saw your video and changed to map, forgive me.
//console.log(pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user')) // ['Bob','Sam']

// Noley -> Thats what im here for :-)

// Assigns own enumerable properties of source object(s) to the destination
// object. Subsequent sources overwrite property assignments of previous sources.
// extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
// should return ->  { 'user': 'fred', 'age': 40 }
// BONUS: solve with reduce
function extend(...destination) {
  return destination.reduce((acc, item) => {
    return Object.assign(acc, item);
  }, {});
}

//Was this supposed to be an array of objects? I used rest operator to accept multiple arguments in destinations. Hope that is okay.
//console.log(extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' })); // { 'user': 'fred', 'age': 40 }

// Noley -> you are good here

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
//const start = 2;
//applyAndEmpty(2, puzzlers); → 3

function applyAndEmpty(input, queue) {
  //Exit case, when queue is empty, return the input
  if (queue.length === 0) {
    return input;
  }

  //for loop
  for (let i = 0; i < queue.length; i++) {
    //assign new input to result of invoking queue at index 0 with input
    let newInput = queue[0](input);
    //remove queue at index 0
    queue.splice(0, 1);
    //call the function again with newinput and queue
    return applyAndEmpty(newInput, queue);
  }
}

//console.log(applyAndEmpty(2, puzzlers)); // 3

// NOLEY -> Very good! great recursion use case, excellent code here

// Returns a function that when called, will check if it has already computed
// the result for the given argument and return that value instead if possible.
function memoize(func) {
  let ran = false;
  let result;
  let firstRunNum;

  return function (num) {
    // Noley great stuff here, excellent -- the if's are
    // stylistically like modern redux code- you can drop the else down there
    if (ran === true && firstRunNum === num) {
      return `This function has already been run, the result is ${result}`;
    }
    if (ran === true && firstRunNum !== num) {
      ran = false;
      return;
    }
    if (!ran) {
      ran = true;
      result = func(num);
      firstRunNum = num;
      return result;
    }
    return result;
  };
}

const funcMemo = memoize(function (num) {
  return num * 2;
});

//console.log(funcMemo(2)); // 4
//console.log(funcMemo(2)); // This function has already been run, the result is 4
//console.log(funcMemo(5)); // 10
//console.log(funcMemo(5)); // This function has already been run, the result is 10

// Invokes func after wait milliseconds. Any additional arguments are provided
// to func when it is invoked.
function delay(func, wait) {
  return function (string) {
    setTimeout(func, wait, string);
  };
}

const print = delay(function (string) {
  console.log(string.toUpperCase());
}, 2000);

console.log(print("This makes sense now"));
console.log("This is first");

// great stuff!
