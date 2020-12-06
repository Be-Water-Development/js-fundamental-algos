// Write a function that takes an array of strings, and 
// returns an array of the same strings values without the vowels (a, e, i, o, u).

//regex to remove vowels: /[aeiou]/ig
// [any char within] i = case insensitive g = global search

const removeVowels = (arr) => {
    //use map to go through the array
    return arr.map((el) => {
        return el.replace(/[aeiou]/ig,'')
    })
}

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]
