// Write a function that checks whether or not a particular
// destination is included within destinations, without using
// the built-in method Array.prototype.includes()

let destinations = [
  "Prague",
  "London",
  "Sydney",
  "Belfast",
  "Rome",
  "Aruba",
  "Paris",
  "Bora Bora",
  "Barcelona",
  "Rio de Janeiro",
  "Marrakesh",
  "New York City",
];

//Good, but a couple optimizations; a for loop would be better (maybe you were practicing reduce, in which case I'm all for it)
// but a for loop would be better because say we were checking for "Prague"-- upon the first iteration on the array we could exit the function
// if there were a million locations our code is not siginicantly faster. Your way  you will hit a lot of redundant iterations.

// Also implicit returns...

const contains = (string, arr) =>
  arr.reduce((acc, el) => {
    if (el === string) {
      acc = true;
    }
    return acc;
  }, false);

console.log(contains("Barcelona", destinations)); // true
console.log(contains("Nashville", destinations)); // false
