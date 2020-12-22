// Write a function that takes an array of strings, and returns an array of
//the same strings values without the vowels (a, e, i, o, u).

//delcare a function removeVowels, array as input
function removeVowels(array) {
  //using map, flip though the array, replace the vowels with an empty string, /g is a global replacement which targets all instances.
  return array.map((item) => item.replace(/[aeiouAEIOU]/g, ""));
}

//uncomment for tests
//console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
//console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
//console.log(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]

// nice regex, always handy
