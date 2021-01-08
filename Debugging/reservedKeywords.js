// We have been asked to implement a function that determines whether or not a given
// word is a reserved keyword. We wrote the isReserved function below along with some
// test cases, but we aren't seeing the expected result.
// Why not? Fix the code so that it behaves as intended.

// Answer

// We weren't seeing the expected result because Array.forEach cannot return a value
// before completing the iteration through the entire array. This meant that
// the return statement was not being executed. By switching the code to use a
// traditional for loop, we enable it to return true and exit the loop once it
// runs into a reserved keyword.

// perfect -- a concept usually used for optimization

const RESERVED_KEYWORDS = [
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
];

function isReserved(name) {
  // Old function - used forEach
  // RESERVED_KEYWORDS.forEach((reserved) => {
  // Fixed method - uses traditional for loop.
  for (let i = 0; i < RESERVED_KEYWORDS.length; i++) {
    // console.log(RESERVED_KEYWORDS[i])
    if (name === RESERVED_KEYWORDS[i]) {
      // console.log(RESERVED_KEYWORDS[i])
      return true;
    }
  }

  return false;
}

console.log(isReserved("monkey")); // false
console.log(isReserved("patch")); // false
console.log(isReserved("switch")); // should be: true
