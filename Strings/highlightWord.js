// The function from the previous exercise returns the number of occurrences of a word in some text.
// Although this is useful, there are also situations in which we just want to find the word in the context of the text.

// For this exercise, write a function that takes a word and a string of text as arguments, and returns the text
//with every instance of the word highlighted.
// To highlight a word, enclose the word with two asterisks ('**')
// on each side and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

/*So I cheated a little here, I wanted to have a global case insensitive replacement for word, so "Sed" at the beginning 
of the sting would change as well. If I used /word/gi, it searches for "word", not the parameter word. So I went down 
some rabbit holes and found this, https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression
which didn't make too much sense to me. So I just skipped all that and converted the string into 
all lower case. It would be helpful to hear some thoughts on how you'd solve this or another way to not corrupt the original
string. Or if I need to buckle down and understand what is happening in that stackoverflow thread let me know. 
*/

//declare a function
function searchWord(word, string) {
  //convert string to lowercase and an array, using map, replace each instance of word with the desired format,
  //convert back to string with join
  return string
    .toLowerCase()
    .split(" ")
    .map((ele) => ele.replace(word, "**" + word.toUpperCase() + "**"))
    .join(" ");
}

//uncomment for test
//console.log(searchWord("sed", text));

// returns
/* "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores 
eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" */

// How you did it is totally okay-- you can pass in vars as regex but its purely an if it makes more sense type of thing
// especially since regex is mostly unreadable to begin with. This is totally fine
