// this function accepts an array of numbers
// and returns an array of only the odd numbers
console.log("-----ReturnOdds Test Case-----")
console.log(returnOdds([1,2,3,4,5,6,7])); // [1,3,5,7]
function returnOdds(array) {
  return array.filter((el) => {
    return el % 2 === 1
  })
}

// this function accepts an array of numbers
// and returns an array of only the even numbers
console.log("-----ReturnEvens Test Case-----")
console.log(returnEvens([1,2,3,4,5,6,7])); // [2,4,6]
function returnEvens(array) {
  return array.filter((el) => {
    return el % 2 === 0
  })
}

// returns only the max element from the inputted array of numbers
console.log("-----FindMax Test Cases-----")
console.log(findMax([1,25,6,3])); // 25
function findMax(array) {
  return Math.max(...array)
}


 // Remove leading and trailing whitespace or specified characters from string
 console.log("-----Trim Test Cases-----")
 console.log(trim(' hello ')); // 'hello'
 
function trim(string) {
  return string.slice(1, -1)
}

// returns an empty object that has methods which give the object 
// functionality that is found in arrays. this object should have the 
// following methods:
// push(val) adds val to the end of the array
// pop() removes a value from the end and returns it
// unshift(val) adds val to the beginning of the array
// shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods 
// are actually doing and return an object that has those methods
function createArray() {
  let arrayObj = []
  arrayObj.push = (val) => {
    arrayObj[arrayObj.length] = val
  }
  arrayObj.pop = () => {
    poppedVal = arrayObj[arrayObj.length -1]
    // arrayObj = arrayObj[0, arrayObj.length -1] Needs work
    return poppedVal
  }
  // Add the rest of the methods
  return arrayObj
}

console.log("-----CreateArray Test Cases-----")
const myArr = createArray()
myArr.push(1)
myArr.push(2)
console.log("Push", myArr)
myArr.pop()
console.log(myArr)

