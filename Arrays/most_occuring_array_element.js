// Build a function that takes in an array as a parameter. 
// Return an object where the key is the element and the value 
// is the number of occurrences for the the element that occurs 
// the most often in the array. If there are ties return an object 
// with all the highest occuring elements. If the paramenter passed 
// in is not an array return null

const arr = [1, 4, 5, 3, 6, 7, 7, 4, 7, 7, 9, 9, 9 ,9];
const obj = {"feet": "smelly"};

// take an array as a parameter
const mode = (arr) => {
    // obj will store all the array elements and their frequencies
    // handle scenarios where the input is not an array
    if (!Array.isArray(arr)) {
        return null
    } else {
        // create a dict of values and occurrences using reduce
        let output = {};
        let obj = arr.reduce((acc, val) => {
            if (!acc[val]) {
                acc[val] = 1
            } else {
                acc[val]++
            }
            return acc
        }, {})
        // find the greatest value in the object, handle multiple modes
        // find the max value in the object 
        const max = Math.max(...(Object.values(obj)))
        // return key:value pairs to the output object if the value = max
        for (const property in obj) {
            if (obj[property] === max) {
                output[property] = max
            }
        }
        return output
    }
};

console.log(mode(arr)); // returns { '7': 4, '9', 4 }
console.log(mode(obj)); // returns null