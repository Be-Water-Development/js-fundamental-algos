// Build a function that takes in an array as a parameter. 
// Return an object where the key is the element and the value 
// is the number of occurrences for the the element that occurs 
// the most often in the array. If there are ties return an object 
// with all the highest occuring elements. If the paramenter passed 
// in is not an array return null

// Changes - redo this in one pass instead of three loops
// Did this in 1 pass through reduce

const arr = [1, 4, 5, 3, 10, 6, 7, 7, 4, 7, 10, 7, 9, 9, 9 ,9];
const obj = {"feet": "smelly"};

const mode = (arr) => {

    if (!Array.isArray(arr)) {
        return null;
    }

    let compare;
    let max = 1;
    let storedEquals = [];

    return arr.sort((a, b) => a - b)
    .reduce((acc, val, ind, arr) => {
        !acc[val] ? acc[val] = 1 : acc[val]++;
        const lastVal = arr[ind - 1];

        if (val != lastVal) { 
            compare = acc[lastVal] || 1; 
                
            if (compare > max) {
                max = compare;
                storedEquals.forEach((el) => {
                    console.log("Deleting key", el)
                    delete acc[el]
                })
                storedEquals = [];
            }

            // This line prevents undefined from being pushed to the array
            if (lastVal) storedEquals.push(lastVal);
            
        }

        if ((ind === arr.length -1) && (acc[val] != max)) {
                delete acc[val];
        }
        
        return acc;
    }, {});
}

console.log(mode(arr)); // returns { '7': 4, '9', 4 }
console.log(mode(obj)); // returns null

// const mode = (arr) => {
//     if (!Array.isArray(arr)) {
//         return null
//     } else {
//         let output = {};
//         let obj = arr.reduce((acc, val) => {
//             if (!acc[val]) {
//                 acc[val] = 1
//             } else {
//                 acc[val]++
//             }
//             return acc
//         }, {})
//         const max = Math.max(...(Object.values(obj)))
//         for (const property in obj) {
//             if (obj[property] === max) {
//                 output[property] = max
//             }
//         }
//         return output
//     }
// };