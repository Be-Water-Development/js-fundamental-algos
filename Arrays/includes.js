// Write a function that checks whether or not a particular 
// destination is included within destinations, without using 
// the built-in method Array.prototype.includes()

let destinations = [
  "Prague",
  "London",
  "Sydney",
  "Belfast",
  "Rome",
  "Aruba",
  "Paris",
  "Bora Bora",
  "Barcelona",
  "Rio de Janeiro",
  "Marrakesh",
  "New York City",
];

// declare a function that takes a city name as a string and an array
const contains = (string, arr) => {
  // set the output to false (assume the value is not in the array)
  let truthy = false
  // iterate through the array, checking the value at each index
  // against the input string
  arr.forEach((el) => {
    // if the element in the array equals the string, switch the output to true
    if (el === string) {
      truthy = true
    }
  })
  // return the output
  return truthy
}

console.log(contains("Barcelona", destinations)); // true
console.log(contains("Nashville", destinations)); // false
