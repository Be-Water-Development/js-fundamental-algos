// Add code to the function neitherFilter in the place marked 
// "ADD CODE HERE" in order to
// achieve the desired console logs.
// The array returned from neitherFilter should contain only the
// elements in the passed-in array that yield a falsey return value when
// passed into BOTH of the two callbacks passed into neitherFilter.

// Create two callbacks that return truthy or falsey values

// cb one: vowels
const isVowel = (letter) => {
    const re = /[aeiouy]/
    return re.test(letter)
}

// cb two: uppercase
const isUppercase = (letter) => {
    const re = /[A-Z]/
    return re.test(letter)
}

const neitherFilter = (arr, first, second) => {
    return arr.filter((el) => {
        return !first(el)
    }).filter((el) => {
        return !second(el)
    })
};

console.log(neitherFilter(["a", "b", "c", "D", "O", "o"], isVowel, isUppercase)); // ['b', 'c']
console.log(neitherFilter(['a', 'P', 'l', 'e', 'o', 't', 'W'], isVowel, isUppercase)) // ['l', 't']

//pass in  your created callbacks
