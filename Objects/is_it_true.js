// We are experimenting with some code to get more comfortable 
// working with objects. Run the snippet below and explain why 
// "It's true!" is never output.

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

// Answer

// The reason "It's true" is never logged to the console is that object properties
// are strings. The JavaScript operator === requires that both values be of the 
// same data type. This means that comparing prop to true is comparing a string to
// a boolean, and will evaluate to false - meaning "It's true" will never be logged
// to the console since the condition on line 17 is never met. 