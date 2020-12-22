// In JavaScript, comparing two objects either with == or === checks for object identity. In other words, the comparison evaluates to true if it's
// the same object on either side of == or ===. This is a limitation, in a sense, because sometimes we need to check if
// two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs.

//Notes: I am dissapointed in my solution, I had a lot of trouble implementing this, I am breaking DRY and this was overall a big struggle.
//Issues: With undefined as a value, cannot use forEach or reduce, how else can you implment a loop with undefined?
//https://stackoverflow.com/questions/40297442/ways-to-iterate-over-undefined-in-arrays
//Tried using spread operator, was not a sucess.

//declare a function objectsEqual, two objects are parameters
function objectsEqual(obj1, obj2) {
  //set a variable same equal to false
  let same = false;
  //generate variables to hold object keys and values in for each object.
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  const value1 = Object.values(obj1);
  const value2 = Object.values(obj2);

  //set a conditional that returns false if lengths of keys and values are not equal
  if (key1.length !== key2.length && value1.length !== value2.length) {
    return same;
  }
  //if the arrays are empty, set same equal to true, return same. (I really hate this, there must be a better way)
  if (
    key1.length === 0 &&
    key2.length === 0 &&
    value1.length === 0 &&
    value2.length === 0
  ) {
    same = true;
    return same;
  }

  //using a for loop, check to see if key's are equal at corresponding indexes
  for (let i = 0; i < key1.length; i++) {
    if (key1[i] === key2[i]) {
      same = true;
    } else {
      same = false;
    }
  }

  //using a for loop, check to see if values's are equal at corresponding indexes
  for (let i = 0; i < value1.length; i++) {
    if (value1[i] === value2[i]) {
      same = true;
    } else {
      same = false;
    }
  }

  //return same
  return same;
}

//uncomment for tests
//console.log(objectsEqual({ a: "foo" }, { a: "foo" })); // true
//console.log(objectsEqual({ a: "foo", b: "bar" }, { a: "foo" })); // false
//console.log(objectsEqual({}, {})); // true
//console.log(objectsEqual({ a: "foo", b: undefined }, { a: "foo", c: 1 })); // false

// Okay this one I think is worth re-doing though the solution will inherently be verbose
// I'd like to see returning the comparisons rather than the explicit true or false
// We really want to be able to exit AS SOON as we see a failing equality condition so I'm thinking `same`
// should default as true rather than false and if we survive all checks then we return it
// I would approach this by defining comparison based on data types and
// write helper functions to strict compare based on these types. Does this make sense?
