// Write a function that takes a string as an argument, and returns that string with a staggered capitalization scheme.
// Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character.
// Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

//declare a function staggeredCase, string as parameter
function staggeredCase(string) {
  //convert string into an array with split, each character gets it's own index with no space in split
  //using map, convert even index's to uppercase, the rest to lowercase
  return string
    .split("")
    .map((ele, index) => {
      if (index % 2 === 0) {
        return ele.toUpperCase();
      } else {
        return ele.toLowerCase();
      }
      //join returns an array, with no space to reform string
    })
    .join("");
}

//uncomment for tests
//console.log(staggeredCase("I Love Coding Javascrtipt!")); // "I LoVe cOdInG JaVaScRiPt!"
//console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
//console.log(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"
