// Write a function that takes an array of strings, and
// returns an array of the same strings values without the vowels (a, e, i, o, u).

//regex to remove vowels: /[aeiou]/ig
// [any char within] i = case insensitive g = global search

const removeVowels = (arr) => {
  return arr.map((el) => {
    return el.replace(/[aeiou]/gi, ""); //love it
  });
};

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]

// nice
