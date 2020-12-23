//Add a property to the below object, jane, so that the code on line 13 logs 'Hey, Bobby!' to the console.

let jane = {
  firstName: "Jane",
  lastName: "Harrelson",
  age: 32,
  location: {
    country: "Denmark",
    city: "Aarhus",
  },
  occupation: "engineer",
  // TECHNICAL COMMUNICATION POLICE: greet is a function that takes a name parameter and console logs
  // the concated string of name and 'hey' and then returns undefined...to write it as you said, which i prefer
  // return that string and console.log all of line 21 on line 21
  //greet is an interior function that takes a name parameter, returns the string `Hey, ${name}`
  greet(name) {
    console.log(`Hey, ${name}!`);
  },
};

jane.greet("Bobby"); // Hey, Bobby!
