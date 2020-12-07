// Add code to the functions func1 and func2 in the
// places marked "ADD CODE HERE" in order to achieve the desired console logs.


//declare a function filterArray, takes an array and a callback 
function filterArray(array, callback) {
  //return the filtered result of calling the callback on the array. 
  return array.filter(item => callback(item));
  //this can also be written as: 
  //return array.filter(callback); 
  
}


const arrOfNums = [1, 2, 3, 4, 5];

//if the remainder of the number is 0, return the number(evens)
function func1(num) {
  if (num % 2 === 0) {
    return num;
  }
}

//if the remainder of the number is 1, return the number(odds)
function func2(num) {
  if (num % 2 === 1) {
    return num;
  }
}

// Uncomment these to check your work!
//console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
//console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]
