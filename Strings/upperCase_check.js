//Write a function that takes a string argument, and returns true if all of the
//alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

//Note: I like the forEach solution more, but I realized I may be overengineering all my strings....

//solution with conditionals
function isUppercase(string) {
  if (string === string.toUpperCase() || string === "") {
    return true;
  }
  if (string !== string.toUpperCase()) {
    return false;
  }
}

//solution with forEach
/*function isUppercase (string) {
    let result;
    if (string === undefined || string === "") {result = true}
    string.split("").forEach((ele) => {
        if (ele === ele.toUpperCase()) {
            result = true;
        } 
         else {
            result = false;
        }
    })
    return result
} */

//uncomment for tests
//console.log(isUppercase("t")); // false
//console.log(isUppercase("T")); // true
//console.log(isUppercase("Four Score")); // false
//console.log(isUppercase("FOUR SCORE")); // true
//console.log(isUppercase("4SCORE!")); // true
//console.log(isUppercase("")); // true

// Cool beans
