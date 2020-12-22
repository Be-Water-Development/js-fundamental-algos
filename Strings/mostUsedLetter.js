// Write a function that takes in a block of text and returns the letter and count that is found most frequently
// Write your own test cases here.

//Side note: am I breaking DRY here with the .test used twice? The first one checks to see if any letters exist, and the second
//the second removes any characters that are not letters from acc. So two different purposes, wanted to confirm. I feel like I
//might have gotten carrier away with my test cases...

//declare a function mostFrequent, string as parameter
function mostFrequent(string) {
  //using a conditional, if the string is not a string, or contains no letters, return "Your string has no letters"
  if (typeof string !== "string" || /[a-zA-Z]/.test(string) === false) {
    return "Your string has no letters";
  }

  //convert string into an array and lowercase, then using reduce, create an object that contains the item, and the count of the item
  const counts = string
    .toLowerCase()
    .split("")
    .reduce((acc, item) => {
      //if item is not a letter, do not add to acc
      if (/[a-z]/.test(item) === false) {
        return acc;
      } else if (!acc[item]) {
        acc[item] = 1;
      } else {
        acc[item]++;
      }
      return acc;
    }, {});

  //declare a variable equal to an empty object to store results in
  let results = {};
  //using for in, find the math max of the highest value, add a key/value pair of those values to results
  for (let prop in counts) {
    if (counts[prop] === Math.max(...Object.values(counts))) {
      results[prop] = counts[prop];
    }
  }
  //return results
  return results;
}

// uncomment for tests!
//console.log(mostFrequent("Unicorns, Cats, Squirrels, Bacon, Avocado")); //{ c: 4, o: 4, s: 4, a: 4 }
//console.log(mostFrequent("1, 4, 5, 5, 5, 5, 5, Rainbows, r, r, R, r")); // { r: 5 }
//console.log(mostFrequent("!@#$%^&*() one two three")); //{ e: 3 }
//console.log(mostFrequent("$$$$$(((((&&&&*(((((((")); // "Your string has no letters"
//console.log(mostFrequent("")); // "Your string has no letters"
//console.log(mostFrequent(undefined)); // "Your string has no letters"
//console.log(mostFrequent(null)); // "Your string has no letters"
//console.log(mostFrequent(true, false)); // "Your string has no letters"
//console.log(mostFrequent()); // "Your string has no letters"
//const text =
// "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
//console.log(mostFrequent(text)) // { e: 77 }
