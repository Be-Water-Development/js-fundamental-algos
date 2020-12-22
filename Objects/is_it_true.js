// We are experimenting with some code to get more comfortable working with objects. 
//Run the snippet below and explain why "It's true!" is never output.

let obj = {
  num: 42,
  "property name": "string value",
  true: false,
  fun: function () {
    console.log("Harr Harr!");
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

//Explanation: 

/*"It's true!" never outputs to the console since none of the keys, [ 'num', 'property name', 'true', 'fun' ], are strictly equal to the boolean true. 
Since the key "true" passed in is a string, not a boolean, the strict comparison operator "===" recognizes the difference in data types. 
The values are truthy, so if we were checking "if (prop)" by itself, the output of "It's true!" would print to the console for each key. 
Javascript also only allows strings, symbols and numbers to be keys in objects, so the "true" key is automatically converted into a string. */

//console.log(Object.keys(obj))
//console.log(Object.values(obj))