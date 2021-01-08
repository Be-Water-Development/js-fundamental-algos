// Gemma and some friends are working on a complex program to generate word ladders,
// transforming one word into another word one character at a time.
// The smallest of her tasks is to print
// the resulting ladder to the screen.

// // A "ladder" is simply an array of word strings; Gemma decides to transform this
// array into a single string where each word within the string is separated by a
// hyphen ('-').
// For example, the array ['pig', 'pie', 'lie', 'lit', 'let'] should be printed as
// the string 'pig-pie-lie-lit-let'.

// Upon first glance, Gemma's code below looks like it should work. But it throws a
//  TypeError, saying: Cannot read property 'forEach' of undefined. Why is that?

// Answer

// The value that forEach is being called on is not an array, but is undefined.
// The "" at the beginning of the array make it evaluate as undefined
// Unclear what the syntax is trying to accomplish and was not able to
// find information on it onlne. Would be interested to learn more about the
// starter code for this one.

// Debug console tests

// console.log([("test", "middleTest")]) // [ 'middleTest' ]
// console.log(Array.isArray([("head", "heal", "teal", "tell", "tall", "tail")])) // true
// console.log("test"[("head", "heal", "teal", "tell", "tall", "tail")]) // undefined

// let ladder = ""[("head", "heal", "teal", "tell", "tall", "tail")].forEach(
//   (word) => {
//     if (ladder !== "") {
//       ladder += "-";
//     }

//     ladder += word;
//   }
// );

// My solution below:

let ladder = ["head", "heal", "teal", "tell", "tall", "tail"].join("-");

console.log(ladder); // expect: head-heal-teal-tell-tall-tail

// this is right, we can talk about this one, its a wierd one
