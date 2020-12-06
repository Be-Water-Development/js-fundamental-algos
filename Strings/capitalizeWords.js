// Write a function that takes a string as an argument, 
// and returns that string with the first character of every 
// word capitalized and all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

const wordCap = (str) => {
    // split the string to isolate the words in an array
    // use map to capitalize the first letter of each word
    // and then take the rest of the string and make sure it is lowercase
    // finally, use the join method on the array with a space character
    // to return the output string
    return str.split(" ").map((el) => {
        return el[0].toUpperCase() + el.substr(1).toLowerCase()
    }).join(" ")
}

console.log(wordCap("four score and seven")); // "Four Score And Seven"
console.log(wordCap("the javaScript language")); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'


