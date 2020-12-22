// Write a function that takes a string as an argument, and returns that string with every lowercase
// letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

//declare a function swapCase, string as input
function swapCase(string) {
  //convert string into an array with no space in split, giving each character it's own index, traverse over the array with map
  return string
    .split("")
    .map((ele) => {
      //if element is uppercase, convert to lowercase
      if (ele === ele.toUpperCase()) {
        return ele.toLowerCase();
      } else {
        //else convert to uppercase
        return ele.toUpperCase();
      }
      //reform string with join with no space
    })
    .join("");
}

//uncomment for tests
//console.log(swapCase("CamelCase")); // "cAMELcASE"
//console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"

// Yeppers
