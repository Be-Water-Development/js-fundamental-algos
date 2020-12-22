// Write a function that takes a string and returns an object containing three properties:
//one representing the number of characters in the string that are lowercase letters,
//one representing the number of characters that are uppercase letters,
//and one representing the number of characters that are neither.

//Side note, this got a little tricky since each character returns string with typeof operator. I searched
//"how to tell if a string is a letter or a number js" and found this https://coderrocketfuel.com/article/how-to-check-if-a-character-is-a-letter-using-javascript
//I'd appreciate an opinion on if that is okay to use or if I'm a cheater pumpkin eater.

//delcare a function letterCaseCount, takes a string
function letterCaseCount(string) {
  //declare a variable that will store the count of each element
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;

  //using split, convert the string into an array, flip through each character using forEach
  string.split("").forEach((ele) => {
    //using .test, see if element is a letter, if not increment neither by 1
    if (/[a-zA-Z]/.test(ele) === false) {
      neither++;
      //if element is uppercase, increment counter by 1
    } else if (ele === ele.toUpperCase()) {
      uppercase++;
      //if element is lowercase, increment counter by 1
    } else if (ele === ele.toLowerCase()) {
      lowercase++;
    }
  });

  //return an object with the counters

  return { lowercase, uppercase, neither };
}

//uncomment for tests
//console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
//console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
//console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
//console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }

// Def not a cheater-- i love finding small tips that help solve the overall problem
// regex test is a great way to do this-- one thing i don't like the code smell of the else if
// in a more functional style three if read better-- the else if is a seperate case so distinct ifs are preferable
