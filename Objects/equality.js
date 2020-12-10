// In JavaScript, comparing two objects either with == or === checks 
// for object identity. In other words, the comparison evaluates to true if it's
// the same object on either side of == or ===. This is a limitation, 
// in a sense, because sometimes we need to check if
// two objects have the same key/value pairs. JavaScript 
// doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object 
// arguments and returns true or false depending on whether 
// the objects have the same key/value pairs.

const objectsEqual = (obj1, obj2) => {
    let output = true

    // create arrays of each objects keys
    obj1Arr = Object.keys(obj1);
    obj2Arr = Object.keys(obj2);

    // first case of inequality: different length
    if (obj1Arr.length != obj2Arr.length) {
        output = false
        return output
    }
    // second case: the objects keys don't have the same values
    for (const prop in obj1) {
        if (obj1[prop] != obj2[prop]) {
            output = false
            return output
        }
    }
    // third case: different keys
    for (let i = 0; i < obj1Arr.length; i++) {
        if (!obj2Arr.includes(obj1Arr[i])) {
            output = false
            return output
        }
    }
    return output
}

console.log(objectsEqual({ a: "foo" }, { a: "foo" })); // true
console.log(objectsEqual({ a: "foo", b: "bar" }, { a: "foo" })); // false
console.log(objectsEqual({}, {})); // true
console.log(objectsEqual({ a: "foo", b: undefined }, { a: "foo", c: 1 })); // false
console.log(objectsEqual({ a: "foo", b: undefined }, { a: "foo", b: 1 })); // false
