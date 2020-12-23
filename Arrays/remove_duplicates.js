// How would you remove duplicate members from an array?

//declare a function, array as input
function removeDuplicate(array) {
  //make sure input is an array.
  if (Array.isArray(array)) {
    //using reduce, flip through the array, directly return this result, initial value is an empty array
    return array.reduce((acc, item) => {
      //if item already exists in the acc already, return the acc
      if (acc.includes(item)) {
        return acc;
        //else add the item to the acc with concat.
      } else {
        return acc.concat(item);
      }
    }, []);
  }
  //if array is not an array, error message below displays
  else return "input must be an array";
}

//Uncomment for tests
//console.log(removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1])); // return [1, 3, 5, 6, 7, 8]
//console.log(removeDuplicate({1: 3, 3: 3, 1: 5, 6: 7, 8: 1})); // return "input must be an array"

// same comment for the 'else' syntax, otherwise i love this answer
