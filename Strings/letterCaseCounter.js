// Write a function that takes a string and returns an object containing
// three properties: one representing the number of characters in the
// string that are lowercase letters,
// one representing the number of characters that are uppercase letters,
//vand one representing the number of characters that are neither.

const letterCaseCount = (str) => {
  if (str.length === 0) {
    return { lowercase: 0, uppercase: 0, neither: 0 };
  } else {
    return str.split("").reduce((acc, val) => {
      if (new RegExp(/[a-z]/).test(val)) {
        if (Object.keys(acc).length === 0) {
          acc["lowercase"] = 1;
          acc["uppercase"] = 0;
          acc["neither"] = 0;
        } else {
          acc["lowercase"]++;
        }
      } else if (new RegExp(/[A-Z]/).test(val)) {
        if (Object.keys(acc).length === 0) {
          acc["lowercase"] = 0;
          acc["uppercase"] = 1;
          acc["neither"] = 0;
        } else {
          acc["uppercase"]++;
        }
      } else {
        if (Object.keys(acc).length === 0) {
          acc["lowercase"] = 0;
          acc["uppercase"] = 0;
          acc["neither"] = 1;
        } else {
          acc["neither"]++;
        }
      }
      return acc;
    }, {});
  }
};

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }

// okay i love the reduce-- i would opt to write descriptive helper functions, avoid elses and any if elses...
// this wouldn't pass from a code smell perspective- too long too big, to many cases
// don't worry about redoing it; but just want to call out a style thing; typically nested if elses should be avoided, they make ur eyes bleed.
// sometimes unavoidable...
