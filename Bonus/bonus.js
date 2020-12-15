// Creates a clone of an object.
const users = [{ 'user': 'barney' },{ 'user': 'fred' }];
const shallowClone = clone(users);
console.log("-----Clone Test Cases-----")
console.log(shallowClone[0] === users[0]) // true
console.log("Shallow clone: ", shallowClone)

function clone(value) {
  return value.map((obj) => {
    return obj
  })
}


// Return the size of collection. If the argument passed is an array, then return
// the length of the array. If the argument passed is an object, then return the
// number of key/value properties.
console.log("-----Size of Collection Test Cases-----")
console.log(size([1,2,3])); // 3
console.log(size({a: 1, b: 2})); // 2
console.log(size(4)) //

function size(collection) {
  if (Array.isArray(collection)) {
    return collection.length
  } else if (typeof(collection) === 'object') {
    return Object.keys(collection).length;
  } else {
    return "Collection was not array or object."
  }
}

// Returns the first element of an array without modifying the original array.
// Returns undefined if array is empty
console.log("-----First Test Cases-----")
console.log(first([1,2,3])); // 1
console.log(first([])); // undefined

function first(array) {
  if (array.length === 0) {
    return undefined
  } else {
    return array[0]
  }
}

// Creates a slice of array with n elements dropped from the beginning.
// n defaults to 1
console.log("-----Drop Test Cases-----")
console.log(drop([1, 2, 3])); // [2, 3]
console.log(drop([1, 2, 3], 2)); // [3]
console.log(drop([1, 2, 3], 5)); // []
console.log(drop([1, 2, 3], 0)); // [1, 2, 3]

function drop(array, n = 1) {
  return array.slice(n)
}

//Creates a slice of array with n elements taken from the beginning.
//n defaults to 1
console.log("-----Take Test Cases-----")
console.log(take([1, 2, 3])); // [1]
console.log(take([1, 2, 3], 2)); // [1, 2]
console.log(take([1, 2, 3], 5)); // [1, 2, 3]
console.log(take([1, 2, 3], 0)); // []

function take(array, n = 1) {
  return array.slice(0, n)
}

// Gets the value of key from all elements in collection.
console.log("-----Pluck Test Cases-----")
console.log(pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user')); 
// ['Bob','Sam']

function pluck(array, key) {
  return array.map((obj) => {
    return obj[key]
  })
}

// Assigns own enumerable properties of source object(s) to the destination
// object. Subsequent sources overwrite property assignments of previous sources.
console.log("-----Extend Test Cases-----")
console.log(extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' }));
// should return ->  { 'user': 'fred', 'age': 40 }
// BONUS: solve with reduce

function extend(...objs) {
  return objs.reduce((acc, obj) => {
    for (const property in obj) {
      acc[property] = obj[property]
    }
    return acc
  }, {})
}

// Using a for loop, call the functions in the queue in order with the input
// number, where the results of each function become the next function’s input.
// Additionally, the queue should be empty after the function is called.
const puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4;},
  function(a) { return a % 5;}
];
const start = 2;
console.log("-----Apply and Empty Test Cases-----")
console.log(applyAndEmpty(2, puzzlers)); // 3

function applyAndEmpty(input, queue) {
  queue.reverse() // modifies the input array
  for (let i = queue.length - 1; i >= 0; i--) {
    input = queue[i](input)
    queue.pop()
  }
  console.log("Queue is empty: ", queue)
  return input
}

// Returns a function that when called, will check if it has already computed
// the result for the given argument and return that value instead if possible.
function memoize(func) {
  let cache = {}
  const returnFunc = (num) => {
    if (Object.keys(cache).includes(num.toString())) {
      console.log("Retrieving from the cache.")
      return cache[num]
    } else {
      console.log("Running the function.")
      cache[num] = func(num)
      return cache[num]
    }
    
  }
  return returnFunc
}

const subtractByTwo = memoize(x => x - 2)

console.log("-----Memoize Test Cases-----")
console.log(subtractByTwo(3))
console.log(subtractByTwo(5))
console.log(subtractByTwo(5))
console.log(subtractByTwo(3))
console.log(subtractByTwo(8))




// Invokes func after wait milliseconds. Any additional arguments are provided
// to func when it is invoked.

function delay(func, wait) {
  const inner = (...args) => {
    setTimeout(func, wait, ...args)
    return `Running the callback after ${wait / 1000} second(s).`
  }
  return inner
}

// const addTenDelayOneSecond = delay(x => console.log(x + 10), 1000)
const addFortyDelayFiveSeconds = delay(x => console.log(x + 40), 5000)

console.log("-----Delay Test Cases-----")
// console.log(addTenDelayOneSecond(50))
console.log(addFortyDelayFiveSeconds(300))

