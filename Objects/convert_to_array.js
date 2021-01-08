// Convert the person object into a nested array nestedPerson,
// containing the same key-value pairs.

let person = {
  title: "Duke",
  name: "Nukem",
  age: 33,
};

const convertToArray = (obj) => {
  let outArr = [];
  for (const prop in obj) {
    let inArr = [];
    inArr.push(prop, obj[prop]);
    outArr.push(inArr);
  }
  return outArr;
};

console.log(convertToArray(person));

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

//good stuff, good use of flow
