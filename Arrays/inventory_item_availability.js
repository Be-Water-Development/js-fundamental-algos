/* Building on the previous exercise, write a function that returns true or false 
based on whether or not an inventory item is available. As before, the function 
takes two arguments: an inventory item and a list of transactions. The function 
should return true only if the sum of the quantity values of the item's transactions 
is greater than zero. Notice that there is a movement property in each transaction 
object. A movement value of 'out' will decrease the item's quantity. */

// You may (and should) use the transactionsFor function from the previous exercise.

const transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 15 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

//Side note: This should be prettier, having trouble condensing my code.

//helper function from previous exercise
const transactionsFor = (inventoryItem, transactions) => {
  return transactions.filter((item) => item.id === inventoryItem);
};

//declare a function isItemAvailable, item and transactions as parameters
const isItemAvailable = (item, transactions) => {
  //declare a variable equal to the result of calling transactionsFor
  const currentItems = transactionsFor(item, transactions);

  //declare a variable to hold the total item quantities
  let sum = 0;

  //using forEach, turn the quantities with "out" movement into negatives, add all items to sum
  currentItems.forEach((ele) => {
    if (ele.movement === "out") {
      sum += -Math.abs(ele.quantity);
    } else {
      sum += ele.quantity;
    }
  });
  //if item is less than or equal to zero, return false, else return true
  if (sum <= 0) {
    return false;
  } else {
    return true;
  }
};

//Uncomment for tests!
//console.log(isItemAvailable(101, transactions)); // false
//console.log(isItemAvailable(105, transactions)); // true
