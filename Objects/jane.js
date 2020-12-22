//Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console.

let jane = {
  firstName: "Jane",
  lastName: "Harrelson",
  age: 32,
  location: {
    country: "Denmark",
    city: "Aarhus",
  },
  occupation: "engineer",
  //greet is an interior function that takes a name parameter, returns the string `Hey, ${name}`
  greet(name) {console.log(`Hey, ${name}!`)}
};



jane.greet("Bobby"); // Hey, Bobby!

