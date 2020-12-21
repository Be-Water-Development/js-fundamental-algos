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
  return array.reduce(cb = (acc, val) => {
    if (val.slice(-2) === 'ly') {
      acc[val] = val.length
    }
    return acc
  }, {})
};

// test the output
console.log(adverbCollections(arr));
