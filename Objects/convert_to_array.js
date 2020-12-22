// Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

let person = {
  title: "Duke",
  name: "Nukem",
  age: 33,
};

//declare a function arrayifier, takes an object as input
function nestedPerson(obj) {
  //using object entries, convert the object into a nested array
  return Object.entries(obj);
}

//uncomment for test
//console.log(nestedPerson(person))

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
