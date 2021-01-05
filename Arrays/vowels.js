// Create an array that has every letter in the alphabet
// (hint do not hardcode-- attempt this programatically).
// From this array, return a new array that contains only vowels.
// For bonus points use the function `filter`

// found the way to create an array of lowercase letters from
// https://stackoverflow.com/questions/12376870/create-an-array-of-characters-from-specified-range
// this method uses map with an array 26 places long, then for each element in the
// array, returns the characters beginning with a >> z based on the character code.

// very nice-- also consider looking at regex as a way to do this
const letters = [...Array(26)].map((_, i) =>
  String.fromCharCode("A".charCodeAt(0) + i)
);

const v = (arr) =>
  arr.filter((el) => {
    const standardizedLetter = el.toUpperCase();
    return (
      standardizedLetter === "A" ||
      standardizedLetter === "E" ||
      standardizedLetter === "I" ||
      standardizedLetter === "O" ||
      standardizedLetter === "U" ||
      standardizedLetter === "Y"
    );
  });

console.log(v(letters)); // ['A', 'E', 'I', 'O', 'U', 'Y']

const lowercaseLetters = ["a", "b"];
console.log(v(lowercaseLetters)); // previously broken test case -> there is a simple way to create a more robust solution-- .toLowerCase() or .toUpperCase() everything to standardize the incoming letter before filtering
