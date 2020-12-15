console.log("-----Simple Math Test Cases-----")
// adds 2 to inputted number
console.log("addTwo:", addTwo(5)); // 7
console.log("addTwo:", addTwo(6)); // 8
function addTwo(number) {
  return number + 2;
}

// adds the two inputted numbers together
console.log("Add:", add(5, 10)); // 15
function add(num1, num2) {
  return num1 + num2;
}

// adds all three inputted numbers together
console.log("Addd:", addd(1,2,3)); // 6
console.log("Addd:", addd(2,4,2)); // 8
function addd(value1, value2, value3) {
  return value1 + value2 + value3;
}

// subtracts the second inputted number from the first inputted number
console.log("Subtract:", subtract(5, 10)); // -5
function subtract(n1, n2) {
  return n1 - n2;
}

// multiplies the inputted number by 2
console.log("MultiplyByTwo:", multiplyByTwo(5)); // 10
console.log("MultiplyByTwo:",multiplyByTwo(6)); // 12
function multiplyByTwo(numero) {
  return numero * 2;
}

// multplies the two inputted numbers together
console.log("Multiply:", multiply(1,2)); // 2
console.log("Multiply:", multiply(2,2)); // 4
function multiply(val1, val2) {
  return val1 * val2
}

// multiplies all three inputted numbers together
console.log("Multiplyy:", multiplyy(1,2,3)); // 6
console.log("Multiplyy:", multiplyy(2,2,3)); // 12
function multiplyy(a, b, c) {
  return a * b * c
}

// returns the square of the inputted number
console.log("Square:", square(5)); // 25
function square(value) {
  return value * value;
}

// determines if the number is odd
// outputs true if the number is odd
// outputs false if the number is even
console.log("-----isOdd Test Cases-----")
console.log(isOdd(4)); // false
console.log(isOdd(5)); // true
function isOdd(num) {
  return !!(num % 2)
}

// determines if the number is negative
// outputs true if the number is negative
// outputs false if the number is zero or positive
console.log("-----isNegative Test Cases-----")
console.log(isNegative(-1)); // true
console.log(isNegative(1)); // false
console.log(isNegative(0)); // false
function isNegative(num) {
  return !!(num < 0);
}
// returns the absolute value of the inputted number
console.log("-----Positive Test Cases-----")
console.log(positive(-1)); // 1
console.log(positive(1)); // 1
function positive(num) {
  return Math.abs(num);
}

// Returns boolean of whether argument is classified as a Number object
console.log("-----isNumber Test Cases-----")
console.log(isNumber(5)); // true
console.log(isNumber('hi')); // false
function isNumber(value) {
  return !!(typeof(value) === 'number')
}

// Returns boolean of whether argument is classified as an Array object
console.log("-----isArray Test Cases-----")
console.log(isArray(5)); // false
console.log(isArray([1,2,3])); // true
function isArray(value) {
  return !!(Array.isArray(value))
}

// Returns boolean of whether argument is classified as an Object
console.log("-----isObject Test Cases-----")
console.log(isObject(5)); // false
console.log(isObject([1,2,3])); // true
function isObject(value) {
  return !!(typeof(value) === 'object')
}

// return boolean of whether argument is classified as null
console.log("-----isNull Test Cases-----")
console.log(isNull(null)); // true
console.log(isNull(5)); // false
function isNull(value) {
  return !!(value === null)
}

