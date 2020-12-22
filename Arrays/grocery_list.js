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
      return acc;
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}
//uncomment for test
console.log(shopper(groceryList, "tofu")); // logs [ 'paprika', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus' ]
console.log(groceryList);

// The directions on this one meant to convey that as your code walked through the list
// it would expose the item (through a console.log) and then remove it from the list (array)
// with your code above lines 44 and 45 out put this...
// [ 'paprika', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus' ]
// [
//   'paprika', 'tofu',
//   'garlic',  'quinoa',
//   'carrots', 'broccoli',
//   'hummus'
// ] --> meaning we don't see one item at a time and we don't remove anything from the original list...I think you over thought this one

//Option two, burn it down:
function burn(list) {
  return list.filter((item) => (item = null));
}
//uncomment for test
//console.log(burn(groceryList)) // logs []

// Better, though i would like to see each item as you 'check it off the list'

//Option three, just in case:
function mutate(list) {
  list.forEach((ele) => {
    if (ele) {
      list.splice(0, list.length);
    }
  });
  return list;
}
//uncomment for test
//console.log(mutate(groceryList)) // logs []

// This one is a 'not good practice' example; here's why:
// a forEach does NOT mutate the array-- doesn't do anything but iterate... but splice does this is dangerous code
// here because you are mutating as you iterate, leading to really undecipherable code and most likely bugs

// What we wanted here, and you for sure just overthought it, is to use a simple loop for iterating, and then a mutation
// function like pop, or shift to actually remove something from the array. higher order functions are not always better than
// a simple loop- just always sexier. :=)
