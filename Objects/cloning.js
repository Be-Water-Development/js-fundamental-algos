//Write a function clone that takes an object as argument and
// returns a shallow copy of that argument. Shallow copy means that it returns a
// new object that has the same key/value pairs, but that you don't need to worry
// about cloning the values as well. The code below demonstrates the expected behaviour.

// declare a function clone, object as parameter
function clone(obj) {
  //set an empty object equal to store the clone in
  let cloned = {};
  //using object.assign, clone the obj onto the target, which is cloned.
  Object.assign(cloned, obj);
  //return cloned
  return cloned;
}

let person = {
  title: "Duke",
  name: "Nukem",
  age: 33,
};

let clonedPerson = clone(person);
person.age = 34;

// uncomment for tests
//console.log(person.age); // 34
//console.log(clonedPerson.age); // 33
//console.log(clonedPerson) // { title: 'Duke', name: 'Nukem', age: 33 }
