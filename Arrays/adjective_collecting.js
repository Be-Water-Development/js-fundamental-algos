/* An adverb is a word that ends in 'ly'. 
Iterate over the array and return an object where 
each key is the adverb found in the array and the 
value is the number of characters of the word. 
For bonus points do it with the function reduce */

const arr = [
  "verb",
  "basketball",
  "anxiously",
  "badly",
  "bread",
  "angrily",
  "extrovert",
  "silently",
];

const obj = {
  1: 'cats', 
  2: 'frogs', 
  3: 'dogs'
};

//declare function adverbCollections, takes a single parameter
const adverbCollections = (array) => {
  //check to see if the array is an array 
  if (Array.isArray(array)) {
    //using reduce, flip through the array, directly returning the result. Initial value equal to an empty object.
    return array.reduce((acc, item) => {
      //if item in the array includes the characters "ly", set a key value pair with key as item, length of item as value. 
      if (item.includes("ly")) {
        //square bracket notation to set key/value pair
        acc[item] = item.length;
      }
      //return the acc, which contains all the key/value pairs
      return acc;
    }, {})
  }
  //if input is not an array, return string asking for an array
  else return "this function requires an array as input";
};


//Uncomment for tests!
//console.log(adverbCollections(arr));
//console.log(adverbCollections(obj)); uncomment for test case