/* Take this array and convert it to an object where the key is the element's 
index and the value is an object whose key is the type of the stringified 
element and the value is the type of the element.

// Bonus...what would happen to the result if you have two elements of the same type? */

const arr = [
  "a",
  //102, // added for bonus test
  504,
  [1, 2, 3],
  { key: "value" },
  true,
  null,
  undefined,
  () => console.log("this is a simple function"),
];

//I am not sure what this is??
/*const { x } = {};
const x = () => {
  return "lol";
 }; */

//side note: I had a lot of trouble here, I don't understand why you can't just do:
//obj[index]= {ele : typeof ele} // returns   '0': { ele: 'string' } etc...
//I've never used obj[index] = {[ele] : typeof ele} to set key/value pairs and the syntax confuses me.
//I originally used obj[index] = `{${ele}: ${typeof ele}}`, I know that is wrong b/c I am returning a string,
//it was the closest I could get with understanding what is happending.

//declare a function, array as input
function types(array) {
  //set a variable equal to an empty object
  const obj = {};
  //using forEach, flip through the array.
  array.forEach((ele, index) => {
    //using square bracket notation, add the key/value pair to obj, index as key, object as value.
    obj[index] = { [ele]: typeof ele }; // I don't know why this works, I tried the [ele] in desperation.
  });
  //return obj
  return obj;
}

//Uncomment for test
console.log(types(arr));

// returns
// {
//   0: { a: string },
//   1: { 504: number },
//   2: { '[1,2,3]': object },
//   3: { true: boolean },
//   4: { null: object },
//   5: { "undefined": "undefined" },
//   6: { "() => void": "function" },
// }
