// adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
function addTwo(number) {
  return number + 2;
}
//console.log(addTwo(5)); // 7
//console.log(addTwo(6)); // 2

// adds the two inputted numbers together
// ex: add(5, 10); -> 15
function add(num1, num2) {
  return num1 + num2;
}
//console.log(add(5, 10)) // 15

// adds all three inputted numbers together
// ex: addd(1,2,3); -> 6
// ex: addd(2,4,2); -> 8
function addd(value1, value2, value3) {
  return value1 + value2 + value3;
}
//console.log(addd(1, 2, 3)); // 6

// subtracts the second inputted number from the first inputted number
// ex: subtract(5, 10); -> -5
function subtract(n1, n2) {
  return n1 - n2;
}
//console.log(subtract(5, 10)); // -5

// multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12
function multiplyByTwo(numero) {
  return numero * 2;
}
//console.log(multiplyByTwo(5)) // 10

// multplies the two inputted numbers together
// ex: multiply(1,2); -> 2
// ex: multiply(2,2); -> 4
function multiply(val1, val2) {
  return val1 * val2;
}
//console.log(multiply(2, 2)); // 4

// multiplies all three inputted numbers together
// ex: multiplyy(1,2,3); -> 6
// ex: multiplyy(2,2,3); -> 12
function multiplyy(a, b, c) {
  return a * b * c;
}
//console.log(multiplyy(2, 2, 3)); // 12

// returns the square of the inputted number
// ex: square(5); -> 25
function square(value) {
  return value * value;
}
//console.log(square(5)); // 25

// determines if the number is odd
// outputs true if the number is odd
// outputs false if the number is even
// ex: isOdd(4); -> false
// ex: isOdd(5); -> true
function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
// I prefer...it is comparison you almost never should return true/or false
// return the comparison that evaluates to be true or false
// also note the es6 syntax and the implicit return
const isOdd = (num) => num % 2 === 0;

//console.log(isOdd(4)); // false
//console.log(isOdd(5)); // true

// determines if the number is negative
// outputs true if the number is negative
// outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false

// same situation as above
function isNegative(num) {
  if (num < 0) {
    return true;
  } else {
    return false;
  }
}
//console.log(isNegative(-1)); // true
//console.log(isNegative(0));// false
//console.log(isNegative(1)); // false

// returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1
function positive(num) {
  return Math.abs(num);
}
//console.log(positive(-1)); // 1
//console.log(positive(1)); // 1

// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber(value) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}

// same deal
const isNumber = (value) => typeof value === "number";

//console.log(isNumber(5)); // true
//console.log(isNumber("squirrels")); // false

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true

// same thing
function isArray(value) {
  if (Array.isArray(value)) {
    return true;
  } else {
    return false;
  }
}
//console.log(isArray(5)); // false
//console.log(isArray([1, 2, 3])); // true

// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → true
function isObject(value) {
  if (typeof value === "object") {
    return true;
  } else {
    return false;
  }
}
//console.log(isObject(5)); //false
//console.log(isObject({1:3, 3:4})); // true
//console.log(isObject([1, 3, 4])); // true

// return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false
function isNull(value) {
  if (value === null) {
    return true;
  } else {
    return false;
  }
}
//console.log(isNull(null)); // true
//console.log(isNull(5)); //false

// Noley, good file to update the verbose code to be es6 and full of implicit returns
