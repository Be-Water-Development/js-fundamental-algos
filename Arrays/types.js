// Take this array and convert it to an object where the key is the element's index and the value is an object whose key is the type of the stringified element and the value is the type of the element. 

// Bonus...what would happen to the result if you have two elements of the same type?

const arr = [
  'a',
  504,
  [1,2,3],
  { 'key': 'value'},
  true,
  null,
  undefined,
  () => void
]



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
