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
  let obj = {};
  // push
  obj.push = (...args) => {
    const keys = Object.keys(obj);
    const noFuncArr = keys.filter((el) => {
      return !["push","pop","shift", "unshift"].includes(el)
    })
    if (noFuncArr.length === 0) {
      console.log("Pushing:", ...args)
      args.forEach((el, index) => {
        obj[index] = `This is ${el}`
      })
    } else {
      const numArr = noFuncArr.filter((el) => {
        return // need a regex here for numbers only
      }).map((el) => {
        // convert the numbers to number data type
      })
      const getRandomInt = (min, max) => {
        min = Math.ceil(min + 1);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }
      // generate random keys that aren't in obj already
      // must be greater than highest int value to be added 
      // to end of object
      for (let i = 0; i < args.length; i++) {
        randomKey = getRandomInt(Math.max(...noFuncArr))
      }     
    }
   
  }

  // pop
  obj.pop = () => {
    const keys = Object.keys(obj);
    const noFuncArr = keys.filter((el) => {
      return !["push","pop","shift", "unshift"].includes(el)
    })
    const poppedVal = noFuncArr[noFuncArr.length - 1]
    delete obj[poppedVal];
    console.log("Popping off:", poppedVal)
    return poppedVal
  }

  // unshift

  return obj;
}

const myArrObj = createArray()

console.log("-----Push Test Cases-----")
myArrObj.push(0, 1, 2, 54, 4, 32) // push into empty array
console.log(myArrObj)
myArrObj.push(9, 8) // push into array that already has values
console.log(myArrObj)

console.log("-----Pop Test Cases-----")
console.log(myArrObj.pop())
console.log(myArrObj)