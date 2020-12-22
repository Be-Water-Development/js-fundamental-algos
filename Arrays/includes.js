// Write a function that checks whether or not a particular destination is included within destinations, 
//without using the built-in method Array.prototype.includes()

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

let obj = {
  1: "squirrels",
  2: "cats",
  3: "bacon",
}

//declare a function contains, city and array as parameters 
function contains(city, array) {
  //check to see if city is a string, and array is an array.
  if (typeof city == "string" && Array.isArray(array)) {
    //set a variable equal to false to store our search result
    let found = false;
    //using forEach, flip through the array. 
      array.forEach((ele) => {
        //if the element in the array is equal to the city, set found to true.
          if (ele === city) {
          found = true;
          }
  });
    //return found. If no matches are found, found is already set to false. 
    return found;
    //if parameters are incorrectly formatted, return string
} else return "parameters must be a string and an array"
}



//Uncomments for tests!
//console.log(contains("Barcelona", destinations)); // true
//console.log(contains("Nashville", destinations)); // false
//console.log(contains(false, destinations)); // "parameters must be a string and an array"
//console.log(contains("Nashville", obj)); // "parameters must be a string and an array"