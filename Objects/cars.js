// Write code that calculates how expensive all the vehicles combined are.

const totalCost = (...args) => {
  return args.reduce((acc, el) => {
    acc += parseInt(el.price) * 1000; //parseInt ignores non numeric values, nice find
    // you could also split on regex[0-9] just offering other ideas
    return acc;
  }, 0);
};

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

let vehicleThree = {
  manufacturer: "Subaru",
  model: "Impreza",
  year: 2013,
  range: 295,
  seats: 7,
  price: "6k",
};

console.log(totalCost(vehicleOne, vehicleTwo, vehicleThree));
