// Write code that does the reverse, starting from a nested array of
// pairs and building an object.

let nestedArray = [
  ["title", "Duke"],
  ["name", "Nukem"],
  ["age", 33],
];

const arrayToObj = (arr) => {
  return arr.reduce((acc, val) => {
    acc[val[0]] = val[1];
    return acc;
  }, {});
};

console.log(arrayToObj(nestedArray));

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

//excellent i like where you at with reduce
