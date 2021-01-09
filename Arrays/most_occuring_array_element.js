// Build a function that takes in an array as a parameter. 
// Return an object where the key is the element and the value 
// is the number of occurrences for the the element that occurs 
// the most often in the array. If there are ties return an object 
// with all the highest occuring elements. If the paramenter passed 
// in is not an array return null

// Changes - redo this in one pass instead of three loops

const arr = [1, 4, 5, 3, 6, 7, 7, 4, 7, 7, 9, 9, 9 ,9];
const obj = {"feet": "smelly"};

const mode = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let compare = 0;
    let max = 0;
    let storedEquals = [];
    return arr.sort((a, b) => a - b).reduce((acc, val, ind, arr) => {
        !acc[val] ? acc[val] = 1 : acc[val]++;
        console.log("Val: ", val, "array at index -1: ", arr[ind -1])
        if (val != arr[ind -1]) { // moving on to a new value in the array
            compare = acc[arr[ind -1]]; // compare is the total count of the previous value
            if (compare > max) { // max is the highest count
                max = compare;
                delete acc[arr[ind -1 - compare]]; // this deletes the key directly behind

            }

            // need to figure out how to delete all key/values that != max

            
            console.log("value at index -1: ", arr[ind-1]);
            console.log("Compare: ", compare);
            console.log("Max: ", max);
            console.log(acc)
        }


        // getting closer but need to figure out a way to delete the keys without
        // the max as their value

        if (acc[val] > compare && val != arr[ind - 1]) {
            console.log("Getting into the delete conditional")
            delete acc[arr[ind -1]];
        } 
        return acc;
    },{});
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