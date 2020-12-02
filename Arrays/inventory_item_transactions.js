/* Write a function that takes two arguments, inventoryItem and transactions, 
and returns an array containing only the transactions for the specified inventoryItem. */

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

// filter is the better solution, solved with forEach since this was already here. 
//const transactionsFor = (inventoryItem, transactions) => {
 // return transactions.filter((item) => item.id === inventoryItem);
//};


//declare a function transactionsFor, inventoryItem and transactions as parameters
function transactionsFor(inventoryItem, transactions) {
  //set a result variable equal to an empty array
  let results = []
  //using forEach, flip through each element, if the element is equal to the inventory item, push into results. 
  transactions.forEach((ele) => {
    if (ele.id === inventoryItem) {
      results.push(ele)
    }
});
//return results 
return results;
}

console.log(transactionsFor(101, transactions));

// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, 
