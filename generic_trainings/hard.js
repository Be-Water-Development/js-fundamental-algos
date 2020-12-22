// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// const callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, 
//the callback prints out the element, index, and entire array.
function forEach(array, callback) {
  array.forEach((ele, index, arr) => {
    callback(ele, index, arr);
  });
}

const cb = function(element, index, arr) {
  console.log(element +", " +index +", " + arr);
}

//Did I oversimplify this? Feel like I am missing something... 
//forEach(["green", "tree", "frogs"], cb); // green, 0, green,tree,frogs tree, 1, green,tree,frogs frogs, 2, green,tree,frogs


// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map
function map(array, callback) {
  let result = [];

  array.forEach((ele) => {
    result.push(callback(ele))
  })
  return result
}

const cbmap = function(num) {
  return num * 11;
}

//console.log(map([4, 5, 6, 7], cbmap)); // [ 44, 55, 66, 77 ]




// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
  if (Array.isArray(collection)) {
    let outArray = [];

  collection.forEach((ele) => {
    if (callback(ele)) {
      outArray.push(ele)
    }
  });
  return outArray

  } else if (typeof collection === "object") {
    //You can solve either of these with filter, wasn't sure what was wanted so I did both. 
    return Object.values(collection).filter((ele) => {
      return callback(ele);
  });

}
}

const cbFilter = function(element) {
  if (element === element.toUpperCase()) {
    return element 
  }
}

//should I be using filter here? It's the better option, wasn't sure if we were trying to recreate filter or use filter?? 
//console.log(filter(["cats", "CATS", "avocados", "AVOCADOS"], cbFilter)); //[ 'CATS', 'AVOCADOS' ]
//console.log(filter({1: "CATS", 2: "FROGS", 3: "dogs", 4: "catdog"}, cbFilter)); // [ 'CATS', 'FROGS' ]






// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return element % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) {
  if (Array.isArray(collection)) {
    return collection.filter((ele) => {
       if (!callback(ele)) {
         return ele;
       }
    });

  } else if (typeof collection === "object") {
    let obj = {};
    const keys = Object.keys(collection);
    
    Object.values(collection).filter((ele, index) => {
      if (!callback(ele)) {
        obj[keys[index]] = ele;
      }
    });
    return obj;
  }
}

const cbReject = function(value) {
  if (value % 2 == 0) {
    return value
  }
}
//console.log((reject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], cbReject))); //[ 1, 3, 5, 7, 9 ]
//console.log((reject({a:1, b:2, c:3, d:4, e:5}, cbReject))) // { a: 1, c: 3, e: 5 }



// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
function uniq(array) {
  return array.reduce((acc, item, index) => {
    if (acc.includes(item)) {
      return acc;
    } else {
      acc.push(item);
    }
    return acc
  }, [])
}
//console.log(uniq([1, 1, 2, 2, 3, 3, 4, 4, 5, 5])); //[ 1, 2, 3, 4, 5 ]



// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
  let index = -1;
  array.forEach((ele, i) => {
    if (ele === value) {
      index = i;
    }
  });
  return index
}
//console.log(indexOf([11, 22, 33], 11)); // 0
//console.log(indexOf([11, 22, 33], 5)); // -1
//console.log(indexOf([1, 2, 4, 5], 5)); // 3



// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.

function once (func) {
  let ran = false;
  let result;

  return function (num) {
    if(!ran) {
      ran = true; 
      result = func(num);
      return result 
    } return result; 
  }
  
}

//per novel below, this is the "stepping stone" I am referring to. That is probably the wrong wording. 
const timesElevenOnce = once(function (num) { 
  return num * 11;
});

//Just a note here, I am realizing there is some holes in my knowledge about how to describe the variable timesElevenOnce and it's relationship with once.
//I know the variable is equal to the evaluated result of the interior function of once, but the "stepping stone" to get from the console.log to the function once
//is kind of foggy to me. I'll rewatch the closuers lecture to get a better grasp, this problem just made me realize I am unsure on how to build the "stepping stone"
//since it has previously been provided for me. 

//console.log(timesElevenOnce(2)); //22
//console.log(timesElevenOnce(3)); //22
//console.log(timesElevenOnce(4)); //22



// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
  if (Array.isArray(array)) {
    let acc = start;
    if(!start && start !== 0) {
      acc = array[0];
      array.shift();
    }

    array.forEach((ele) => {
      acc = callback(acc, ele)
    })
  return acc
 }
}

//console.log(reduce([1, 2, 3], function(stored, current) {return stored + current}, 0)); // 6
//console.log(reduce([1, 2, 3, 4, 5], function(stored, current) {return stored + current}, 0)); // 15
//console.log(reduce([1, 2, 3, 4, 5], function(stored, current) {return stored + current})); //15




// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
function every(array, func) {
  return array.reduce((acc, item) => {
    if (!func(item)) {
      acc = false;
    }
    return acc
  }, true);
}

//console.log(every([2, 4, 6], function(ele) {return ele % 2 === 0})) // true
//console.log(every([2, 5, 6], function(ele) {return ele % 2 === 0})) // false




// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {
  return array.flat()
}

function flattenReduce(array) {
  return array.reduce((acc, item) => {
    return acc.concat(item);
  }, []);
}

//console.log(flatten([1, [2, 3, [4]]])); //[ 1, 2, 3, [ 4 ] ]
//console.log(flattenReduce([1, [2, 3, [4]]])); // [ 1, 2, 3, [ 4 ] ]



//I had a lot of trouble with the recursive flattening, I tried to find a way to measure how deep an array is and then set a counter to track how many times to call the 
//recursive function, no luck there. Then I made a recursive function that runs until the exit case was results === array.flat(infinity) and exceeded my maximum callstack size. 
//Then I found this article and read it https://medium.com/@mccarthyd/what-happens-when-you-flatten-an-array-using-recursion-da2954deece9 which I felt bad 
//about reading but it helped me understand what is happening. I was able to recreate the solution a day later but I am worried I missed some hard learning. 
//I made a video solving it as well, so I know what is happening and I can explain it, but I feel guilt and need to practice recursion more. Forgive me. 


// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {
 //set a results variable 
 let results = [];
 //traverse over the array, making a recursive call to the function if the element is an array, not an integer 
 array.forEach((ele) => {
    if (Array.isArray(ele)) {
      results.push(...flattenDeep(ele));
    } else {
       //if the item is an integer, push into results
      results.push(ele);
    }
 });
 
 //return results 
return results

}
  

//console.log(flattenDeep([1, [2, 3, [4]]])) // [ 1, 2, 3, 4 ]
















