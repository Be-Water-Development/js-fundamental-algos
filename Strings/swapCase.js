// Write a function that takes a string as an argument, and returns 
// that string with every lowercase
// letter changed to uppercase and every uppercase letter changed to 
// lowercase. Leave all other characters unchanged.

// rewrite this without if/else statements

const swapCase = (str) => {
    return str.split('').map((el) => {
        if (new RegExp(/[A-Z]/).test(el)) {
            return el.toLowerCase()
        } else if (new RegExp(/[a-z]/).test(el)) {
            return el.toUpperCase()
        } else {
            return el;
        }
    }).join('')
}

console.log(swapCase("CamelCase")); // "cAMELcASE"
console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"
