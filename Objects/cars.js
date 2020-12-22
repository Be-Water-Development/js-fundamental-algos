// Write code that calculates how expensive all the vehicles combined are.

let vehicleOne = {
  manufacturer: "Tesla",
  model: "Model X",
  year: 2015,
  range: 295,
  seats: 7,
  price: "100k",
};

let vehicleTwo = {
  manufacturer: "Frd",
  model: "Focus",
  year: 2015,
  range: 295,
  seats: 7,
  price: "30k",
};

//delcare a function price, two objects as parameters
function price(obj1, obj2) {
  //using parseInt, convert each price into a number, storing the sum of both into totalPrice
  const totalPrice = parseInt(obj1.price, 10) + parseInt(obj2.price, 10);
  //return totalPrice plus "k"
  return totalPrice + "k";
}

//uncomment for tests
//console.log(price(vehicleOne, vehicleTwo)) // 130K
