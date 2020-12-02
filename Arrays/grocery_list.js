// We have made a grocery list, and as we check off items on that list, we would like to remove them.

// Write code that removes the items from 'groceryList' one by one,
// until it is empty. If you log the elements you remove,
// the expected behavior would look as follows.


let groceryList = [
  "paprika",
  "tofu",
  "garlic",
  "quinoa",
  "carrots",
  "broccoli",
  "hummus",
];
// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

//groceryList; // []



//SIDE NOTE: I was unsure on what was wanted here, so I wrote three options, one to remove the specified item, 
//one to burn the list and one because I think forEach mutates the original array while the others do not. 

//Option one, remove specified item: 
function shopper(list, checkedOff) {
  return list.reduce((acc, item, index) => {
      if (item === checkedOff) {
        return acc
      } else {
        acc.push(item);
      }
      return acc
  }, [])
}
//uncomment for test 
//console.log(shopper(groceryList, "tofu")) // logs [ 'paprika', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus' ]


//Option two, burn it down:
function burn(list) {
  return list.filter(item => item = null)
}
//uncomment for test 
//console.log(burn(groceryList)) // logs []



//Option three, just in case: 
function mutate(list) {

 list.forEach((ele) => {
      if (ele) {
       list.splice(0, list.length);
       } 
})
return list
} 
//uncomment for test!
//console.log(mutate(groceryList)) // logs []



