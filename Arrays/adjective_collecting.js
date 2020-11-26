// An adverb is a word that ends in 'ly'. 
// Iterate over the array and return an object 
// where each key is the adverb found in the array 
// and the value is the number of characters of the word. 
// For bonus points do it with the function reduce

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


const adverbCollections = (array) => {
  // iterate over the array with reduce
  // return an object where each key is the adverb, and the value is the 
  // number of chars
  return array.reduce(cb = (acc, val) => {
    // acc starts as an empty object
    // use indexing to check if the last two letters of the word = "ly"
    // conditional statement
    if (val.slice(-2) == 'ly') {
      // if the last two letters are "ly", set the word as the key
      // and the value as the length of the key
      acc[val] = val.length
    }
    return acc
  }, {})
};

// test the output
console.log(adverbCollections(arr));
