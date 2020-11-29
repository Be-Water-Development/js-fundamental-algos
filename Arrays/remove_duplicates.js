// How would you remove duplicate members from an array?

// Use reduce, push elements into an array if the key doesn't exist

// Declare the function
const removeDuplicate = (arr) => {
    // empty array to push values
    const output = []
    // reduce with an empty obj as the acc
    arr.reduce((acc, val) => {
        if (!acc[val]) {
            acc[val] = val;
            output.push(val)
        }
        return acc
    }, {})
    return output
}

console.log(removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1])); // return [1, 3, 5, 6, 7, 8]


