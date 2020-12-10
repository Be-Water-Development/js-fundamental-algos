// Convert the person object into a nested array nestedPerson, 
// containing the same key-value pairs.

let person = {
  title: "Duke",
  name: "Nukem",
  age: 33,
};

const convertToArray = (obj) => {
  // output outside array
  let outArr = []
  // iterate through the object, creating inner arrays for each key/value pair
  for (const prop in obj) {
    let inArr = []
    inArr.push(prop, obj[prop])
    outArr.push(inArr)
  }
  return outArr
}

console.log(convertToArray(person));

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
