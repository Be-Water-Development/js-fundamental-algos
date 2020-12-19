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
    console.log("Pushing:", ...args)
    const noFuncArr = Object.keys(obj).filter((el) => {
      return !["push","pop","shift", "unshift"].includes(el)
    })
    if (noFuncArr.length === 0) {
      args.forEach((el, i) => {
        obj[i] = `This is ${el}`
      })
    } else {
      const numArr = noFuncArr.filter((el) => {
        return new RegExp(/^(0|[1-9]\d*)$/).test(el) // positive decimals
      }).map((el) => {
        return Number(el)
      })
      let i = Math.floor(Math.max(...numArr)) + 1
      args.forEach((el) => {
        obj[i] = `This is ${el}`
        i++
      })
    }
   
  }

  // pop

  obj.pop = () => {
    const noFuncArr = Object.keys(obj).filter((el) => {
      return !["push","pop","shift", "unshift"].includes(el)
    })
    const poppedVal = noFuncArr[noFuncArr.length - 1]
    delete obj[poppedVal];
    console.log("Popping off key:", poppedVal)
    return poppedVal
  }

  // unshift

  obj.unshift = (...args) => {
    console.log("Unshifting:", ...args)
    const noFuncArr = Object.keys(obj).filter((el) => {
      return !["push","pop","shift", "unshift"].includes(el)
    })
    if (noFuncArr.length === 0) {
      args.forEach((el, i) => {
        obj[i] = `This is ${el}`
      })
    } else {
      const numArr = noFuncArr.filter((el) => {
        return new RegExp(/^(0|[1-9]\d*)$/).test(el) // positive integers
      }).map((el) => {
        return Number(el)
      })
      let minKey = Math.min(...numArr)
      let cachedIndex = 0
      args.reverse()
      while (minKey > 0 && cachedIndex < args.length) {
        obj[minKey -1] = `This is ${args[cachedIndex]}`
        cachedIndex++;
        minKey--
      }
      const newNumArr = Object.keys(obj).filter((el) => {
        return !["push","pop","shift", "unshift"].includes(el)
      }).filter((el) => {
        return new RegExp(/^(0|[1-9]\d*)$/).test(el) // positive integers
      }).map((el) => {
        return Number(el)
      });
      newNumArr.reverse()
      newNumArr.forEach((el) => {
        obj[el + (args.length - cachedIndex)] = obj[el]
      })
      let newIndex = args.length - cachedIndex -1;
      for (let i = cachedIndex; i < args.length; i++) {
        obj[newIndex] = `This is ${args[i]}`
        newIndex--
      }
    }
  }

  // shift

  obj.shift = () => {
    const noFuncArr = Object.keys(obj).filter((el) => {
      return !["push","pop","shift", "unshift"].includes(el)
    })
    const shiftedVal = noFuncArr[0]
    delete obj[shiftedVal]
    console.log(`Deleting value from beginning of object at key: ${shiftedVal}`)
    noFuncArr.filter((el, i) => {
      return !(i === 0)
    }).forEach((el) => {
      obj[el -1] = obj[el]
      delete obj[el]
    })
    return shiftedVal;
  }

  return obj;
}

const myArrObj = createArray()

console.log("")
console.log("----------CreateArray() Test cases----------")

console.log("-----Push Test Cases-----")
myArrObj.push(0, 1, 2, 3, 4, 5, 10, 15, 100, "foo", "bar", "buzz") // push into empty array
console.log("Adding some more obscure keys...")
myArrObj["12.56"] = "this is a decimal number" // test regex with decimal
myArrObj["34..s56"] = "this is not a decimal number" // test regex with non-numeric digit
console.log("Array after first push and adds:", myArrObj)
myArrObj.push(9, 8) // push into array that already has values
console.log("Array after second push:", myArrObj)

console.log("-----Pop Test Cases-----")
myArrObj.pop()
myArrObj.pop()
myArrObj.pop()
console.log("Array after pop():", myArrObj)

console.log("-----Unshift Test Cases-----")
myArrObj.unshift("unshift 1", "unshift 2")
myArrObj.unshift("unshift again", "...and again")
console.log(myArrObj)
console.log("-----Unshift Edge Cases, Min key > 0-----")
delete myArrObj['0']
delete myArrObj['1']
delete myArrObj['2']
delete myArrObj['3']
console.log("Array after deleting keys 0-3:", myArrObj)
myArrObj.unshift("should be 0", "should be one")
console.log(myArrObj)

console.log("-----Shift Test Cases-----")
myArrObj.shift()
myArrObj.shift()
console.log(myArrObj)

console.log("-----Unshift Three more values-----")
myArrObj.unshift("newOne", "newTwo", "newThree")
console.log(myArrObj)
