// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  return array.filter((item) => item % 2 !== 0);
}
//console.log(returnOdds([1,2,3,4,5,6,7])); // [ 1, 3, 5, 7 ]

// Nice, an implicit return very good

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  return array.filter((item) => item % 2 === 0);
}
//console.log(returnEvens([1,2,3,4,5,6,7])); // [ 2, 4, 6 ]

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  return Math.max(...array);
}
//console.log(findMax([1,25,6,3])); // 25

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  return string.trim();
}
//console.log(trim(' hello ')); // 'hello'

// returns an empty object that has methods which give the object functionality that is found in arrays. this object should have the following methods:
// push(val) adds val to the end of the array
// pop() removes a value from the end and returns it
// unshift(val) adds val to the beginning of the array
// shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and return an object that has those methods
function createArray(arr, value) {
  return {
    push: (arr) => arr.concat(value),
    pop: (arr) => {
      const endVal = arr[array.length - 1];
      arr.splice(arr.length - 1, 1);
      return endVal;
    },
    unshift: (arr) => arr.splice(0, 0, value),
    shift: (arr) => {
      const firstVal = arr[0];
      arr.splice(0, 1);
      return firstVal;
    },
  };
}

//I am a little fuzzy on if this is the return value wanted, LMK if I am off the rails here.

//console.log(createArray());// {push: [Function: push], pop: [Function: pop], unshift: [Function: unshift], shift: [Function: shift]}

//This one needs a little work...

//the array you pass in here is never used in any of the methods...
const x = createArray([], "hello");

//pushed to the front, wheres the real push adds to the  back of the array
console.log("push", x.push(["thang"]));

//Array is not defined when invoking this one
console.log("pop", x.pop(["thang"]));

//Take a look at the following ones- i don't think you should pass in an array to any of the functions
