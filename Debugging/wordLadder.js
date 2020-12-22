// Gemma and some friends are working on a complex program to generate word ladders,
// transforming one word into another word one character at a time. The smallest of her tasks is to print
// the resulting ladder to the screen.

// // A "ladder" is simply an array of word strings; Gemma decides to transform this
// array into a single string where each word within the string is separated by a hyphen ('-').
// For example, the array ['pig', 'pie', 'lie', 'lit', 'let'] should be printed as the string 'pig-pie-lie-lit-let'.

// // Upon first glance, Gemma's code below looks like it should work. But it throws a
//  TypeError, saying: Cannot read property 'forEach' of undefined. Why is that?

/*
let ladder = ""[("head", "heal", "teal", "tell", "tall", "tail")].forEach(
  (word) => {
    if (ladder !== "") {
      ladder += "-";
    }

    ladder += word;
  }
);

console.log(ladder); // expect: head-heal-teal-tell-tall-tail
*/

//forEach is only able to iterate over an array, not an empty string. Since "" was included prior to the array, forEach cannot iterate over that empty string. 
//once the string is removed, the error "Cannot access 'ladder' before initialization" prints, I would recommend declaring ladder as a seperate variable, then using forEach
//to modify the array into the desired format. Also, this code does not result in the intended output even when the errors above are fixed. I'd use .join("-") instead, Gemma 
//has some weird stuff going on. 


//removed "", removed interior (), 
let ladder = ["head", "heal", "teal", "tell", "tall", "tail"];

/*
ladder.forEach(
  (word) => {
    if (ladder !== "") {
      ladder += "-";
    }

    ladder += word;
  }
);

console.log(ladder); // head,heal,teal,tell,tall,tail-head-heal-teal-tell-tall-tail
*/ 
console.log(ladder.join("-")); // head-heal-teal-tell-tall-tail