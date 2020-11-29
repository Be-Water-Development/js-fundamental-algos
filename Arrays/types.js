// Take this array and convert it to an object where the key is the 
// element's index and the value is an object whose key is the type of 
// the stringified element and the value is the type of the element.

// Bonus...what would happen to the result if you have two elements 
// of the same type?

// Answer - they would be handled as different keys in the output object 
// because the object is built based on the element's index in the input array

const arr = [
  "a",
  504,
  [1, 2, 3],
  [4, 5, 6], 
  { key: "value" },
  true,
  null,
  undefined,
  () => console.log("this is a simple function"),
];

// const { x } = {};
// const x = () => {
//   return "lol";
// };

const types = (arr) => {
  // use reduce to create the output obj
  return arr.reduce((acc, val, ind, arr) => {
    acc[ind] = {}
    acc[ind][val] = typeof(val)
    return acc
  }, {})
}

console.log(types(arr))

// returns

// {
//   '0': { a: 'string' },
//   '1': { '504': 'number' },
//   '2': { '1,2,3': 'object' },
//   '3': { '4,5,6': 'object' },
//   '4': { '[object Object]': 'object' },
//   '5': { true: 'boolean' },
//   '6': { null: 'object' },
//   '7': { undefined: 'undefined' },
//   '8': { '() => console.log("this is a simple function")': 'function' }
// }

// Answer that was prefilled, I think the above is what was looked for as well:

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
