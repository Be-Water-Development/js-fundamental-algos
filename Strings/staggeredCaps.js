// Write a function that takes a string as an argument, and returns
// that string with a staggered capitalization scheme.
// Every other character, starting from the first, should be
// capitalized and should be followed by a lowercase or non-alphabetic character.
// Non-alphabetic characters should not be changed,
// but should be counted as characters for determining when
// to switch between upper and lower case.

const staggeredCase = (str) => {
  // we can use even indices to capitalize and odd indices to lowercase -- > love the logic. hate the else ifs :-)
  return str
    .split("")
    .map((el, ind, arr) => {
      if (el.match(/[a-zA-z]/) && ind % 2 === 0) {
        return el.toUpperCase();
      } else if (el.match(/[a-zA-z]/) && ind % 2 === 1) {
        return el.toLowerCase();
      } else {
        return el;
      }
    })
    .join("");
};

console.log(staggeredCase("I Love Coding Javascript!")); // "I LoVe cOdInG JaVaScRiPt!"
console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
console.log(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"
