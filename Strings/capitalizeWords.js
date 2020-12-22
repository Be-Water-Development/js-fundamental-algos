// Write a function that takes a string as an argument,
//and returns that string with the first character of every
//word capitalized and all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

//declare a function wordCap, string as parameter
function wordCap(string) {
  //convert the string into an array with split
  //using map, select the item at index 0, convert item to uppercase, add the remaining items from index 1 onwards.
  //convert back into a string with join
  return string
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1, item.length))
    .join(" ");
}

//uncomment for tests!
console.log(wordCap("four score and seven")); // "Four Score And Seven"
console.log(wordCap("the javaScript language")); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'

// good stuff, had to check you :=)
