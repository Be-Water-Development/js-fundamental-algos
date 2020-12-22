/*Build a function that takes in an array as a parameter. 
Return an object where the key is the element and the value 
is the number of occurrences for the the element that occurs 
the most often in the array. If there are ties return an 
object with all the highest occuring elements. If the paramenter 
passed in is not an array return null */

const arr = [1, 4, 5, 3, 6, 7, 7, 4, 7, 7];
const arr1 = [1, 1, 2, 2, 3, 5, 7];
const obj = { 1: 2, 3: 4, 5: 6 };

// declare a function that takes an array as input
const mode = (array) => {
  //check to see if array is an array
  if (Array.isArray(array)) {
    //using reduce, generate an object with item as key, counter as value. Empty object as initial value.
    let newobj = array.reduce((acc, item) => {
      if (!acc[item]) {
        acc[item] = 1;
      } else {
        acc[item]++;
      }
      return acc;
    }, {});

    //using reduce, flip through the keys, if the value of the key is equal to the max value from the array,
    //add that object to the accumulator. Empty object as initial value.
    return Object.keys(newobj).reduce((acc, item, index) => {
      if (newobj[item] == Math.max(...Object.values(newobj))) {
        acc[item] = newobj[item];
      }
      return acc;
    }, {});
  }
  // Noley, changing this 'look'
  //if array is not an array, return null
  return null;
};

//Uncomment for tests!
//console.log(mode(arr)); // returns { 7: 4 }
console.log(mode(arr1)); // returns { '1': 2, '2': 2 }
//console.log(mode(obj)); // returns null

// Noley, love the work here, shows a lot of skill, also shows why map, reduce, filter are
// so important you can use em to solve EVERYTHING... but it's also a complex answer
// as long as you know the simple manner like a for loop that builds an object as you loop
// thats n length-- your code is n squared...cuz you loop over twice.
