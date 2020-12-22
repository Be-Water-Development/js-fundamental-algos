// Write a function that takes a word and a string of text as arguments,
//and returns an integer representing the number of times the word appears in the text.

// You may assume that the word and text inputs will always be provided.

//declare a function, searchWord, takes item and string as input
function searchWord(item, string) {
  //set a counter equal to zero
  let counter = 0;
  //using split, convert string to an array, then flip through the array with forEach
  string.split(" ").forEach((ele) => {
    //if element in lowercase is equal to the item, increment counter by one
    if (ele.toLowerCase() === item) {
      counter++;
    }
  });

  //return counter
  return counter;
}

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

//uncomment for tests
//console.log(searchWord("sed", text)); // 3
