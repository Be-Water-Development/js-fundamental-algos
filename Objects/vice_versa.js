// Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [
  ["title", "Duke"],
  ["name", "Nukem"],
  ["age", 33],
];

//declare a function createObj, takes an array as parameter
function createObj(array) {
  //using object.fromEntries, convert the array into key/value pairs
  return Object.fromEntries(array);
}

// Expected output:
console.log(createObj(nestedArray));
// { title: 'Duke', name: 'Nukem', age: 33 }

// nice find, im not familiar with fromEntries
