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
  // Interesting, never seen this done before `cb =` --> here you instantiate a
  // locally scoped var `cd` and set it equal to the callback function
  // this isn't necessary; the first param that `reduce` takes is a function. the function itself takes
  // two params- no need to name the function cd. I changed it to what it should be; you'll never need to set a var like that
  return array.reduce((acc, val) => {
    if (val.slice(-2) === "ly") {
      acc[val] = val.length;
    }
    return acc;
  }, {});
};

// test the output
console.log(adverbCollections(arr));
