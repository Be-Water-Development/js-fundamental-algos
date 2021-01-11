// Iterates over elements of an array invoking callback for each element. 
// The callback should be passed the element, the current index, and the entire array.
console.log("-----forEach-----")
const callback = function(element, index, array) {
console.log(element +"," +index +"," +array);
}
forEach(['a','b','c'], callback); // prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']
// For each element in the array, the callback we passed is called. The callback can be customized, 
// but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
}



// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
console.log("-----Map-----")
console.log(map([1,2,3], function(element, index, array) {
 return element * 3;
})); // [3,6,9]
// BONUS: use the forEach method you use to create map
function map(array, callback) {
  let outArr = [];
  forEach(array, (el) => {
    outArr.push(callback(el))
  })
  return outArr
    
}

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
console.log("-----Filter-----")
console.log(filter([1,2,3,4], function(element, index, collection) {
 return element % 2 === 0;
})); // [2,4]
console.log(filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
 return element % 2 !== 0;
})); // [1,3]
function filter(collection, callback) {
  let outArr = []
  if (Array.isArray(collection)) {
    forEach(collection, (el) => {
      if (callback(el)) {
        outArr.push(el)
      }
    })
  } else if (typeof(collection) === 'object') {
    forEach(Object.keys(collection), (el) => {
      if (callback(collection[el])) {
        outArr.push(collection[el])
      }
    })
  }
  return outArr
}

// Removes all elements from array that callback returns truthy for and returning a collection 
// of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
console.log("-----Reject-----")
console.log(reject([1,2,3,4], function(element, index, collection) {
 return element % 2 === 0;
})); // [1,3]
console.log(reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
 return value % 2 !== 0;
})); // {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) {
  if (Array.isArray(collection)) {
    return collection.filter((el) => {
      return !callback(el)
    })
  } else if (typeof(collection) === 'object') {
      return Object.keys(collection).filter((el) => {
        return !callback(collection[el])
      }).reduce((acc, val) => {
        acc[val] = collection[val]
        return acc
      }, {})
  }
}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
console.log("-----Unique-----")
console.log(uniq([1,2,1])); // [1,2]
function uniq(array) {
  return array.reduce((acc, val) => {
    if (!acc.includes(val)) {
      acc.push(val)
    }
    return acc
  },[])
}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function

// Redo this. Had a single &. 
// Added && and worked the same way

console.log("-----indexOf-----")
console.log(indexOf([11,22,33,11], 11)); // 0
console.log(indexOf([11,22,33], 5)); // -1
function indexOf(array, value) {
  let counter = 0
  return array.reduce((acc, val, ind) => {
    if (val === value && counter === 0) {
      acc = ind
      counter ++
    }
    return acc
  }, -1)
}

// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
function once(func) {
  let cachedVal
  let called = false
  const inner = (...args) => {
    if(!called) {
      called = true
      cachedVal = func(...args)
      return cachedVal
    } else {
      return `The function can only be called once. 
      Returning result from first call: ${cachedVal}`
    }
  }
  return inner
}

const plusTwo = once(el => el +2)
console.log("-----Once-----")
console.log(plusTwo(4)) // 6
console.log(plusTwo(8)) // 'This function can only be called once. Returning result from first call: 6'
console.log(plusTwo(24)) // 'This function can only be called once. Returning result from first call: 6'

// Reduces collection to a value which is the accumulated result of running each element in 
// collection through iteratee, where each successive invocation is supplied the return value 
// of the previous. If accumulator is not provided the first element of collection is used as 
// the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
console.log("-----Reduce-----")
console.log(reduce([1,2], function(stored,current) {
 return stored + current;
})); // 3
console.log(reduce([1,2], function(stored,current) {
 return stored + current;
},1)); // 4
function reduce(array, callback, start) {
  let storedVal;
  if (start) {
    storedVal = start
    for (let i = 0; i < array.length; i++) {
      storedVal = callback(storedVal, array[i])
    }
  } else {
    storedVal = array[0]
    for (let i = 1; i < array.length; i++) {
    storedVal = callback(storedVal, array[i])
    }
  }
  return storedVal
}

//---Redo this, congested code - improve style---

// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
console.log("-----Every-----")
console.log(every([2, 4, 6], function(elem) {
  return elem % 2 == 0;
}));  // true
console.log(every([2, 4, 7, 6], function(elem) {
  return elem % 2 == 0;
}));  // false
// BONUS: use reduce in your answer
// Not using the .every() array method

function every(array, func) {
  return array.reduce((acc, val) => {
    !func(val) ? acc = false : acc;
    return acc;
  }, true)
}

// function every(array, func) {
//   let outVal;
//   let boolArr = array.reduce((acc, val) => {
//     if (func(val)) {
//       acc.push(true)
//     } else acc.push(false)
//     return acc
//   },[])
//   for (let i = 0; i < boolArr.length; i++) {
//     if (!boolArr[i]) {
//       outVal = false
//       return outVal
//     } else outVal = true
//   } 
//   return outVal
// }

// Flattens a nested array.
console.log("-----Flatten-----")
console.log(flatten([1, [2, 3, [4]]])); // [1, 2, 3, [4]]
function flatten(array) {
  return array.reduce((acc, val) => {
    if (Array.isArray(val)) {
      val.forEach((el) => {
        acc.push(el)
      })
    } else acc.push(val)
    return acc
  }, [])
}

// Recursively flattens a nested array.

// Not recursive - recursive means to call itself

console.log("-----flattenDeep-----")
console.log(flattenDeep([1, [[2, 3, [4]]]])); // [1, 2, 3, 4]

function flattenDeep(array) {

  // Termination case
  if (!Array.isArray(array)) {
    console.log("Terminated"); 
    return;
  }

  // Base case
  // if (array.filter((el) => {
  //   return Array.isArray(el)
  // }).length === 0) {
  //   console.log("Base case");
  //   return;
  // }

  // Recursion

  // Next steps - figure out how to call flattenDeep on the appropriate array while
  // generating an output array. Will figure it out then clean up
  // 

  let outArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) outArr.push(array[i]);
    if (Array.isArray(array[i])) {
      let recArr = [];
      recArr.push(array[i]);
      return flattenDeep(recArr);
    } 
    console.log("OutArr: ", outArr);
  }
  console.log(outArr);
  // return flattenDeep(recArr);
  

}


// function flattenDeep(array) {
//   return array.reduce((acc, val) => {
//       if (Array.isArray(val)) {
//         let initVal = val
//         while (initVal.some(elem => Array.isArray(elem))) {
//           initVal = initVal.reduce((acc, val) => {
//             if (Array.isArray(val)) {
//               val.forEach((el) => {
//                 acc.push(el)
//               })
//             } else acc.push(val)
//             return acc
//           }, [])
//         }
//         initVal.forEach((el) => {
//           acc.push(el)
//         })
//       } else acc.push(val)
//       return acc
//     }, [])
// }
      

