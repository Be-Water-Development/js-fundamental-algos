//Write a function that takes a string argument, and returns true 
// if all of the alphabetic characters inside the string are uppercase; 
// false otherwise. Ignore characters that are not alphabetic.

const isUppercase = (str) => {
    output = true
    str.split('').forEach((el) => {
        if (new RegExp(/[a-z]/).test(el)) {
            output = false
        }
    })
    return output
}

console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true
