// We have been asked to implement a function that determines whether or not a given
// word is a reserved keyword. We wrote the isReserved function below along with some
// test cases, but we aren't seeing the expected result.
// Why not? Fix the code so that it behaves as intended.

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
  let result = false; //declared a variable result equal to false, forEach always returns undefined, need variable outside forEach scope to store result in.

  RESERVED_KEYWORDS.forEach((reserved) => {
    if (name === reserved) {
      result = true; // set result equal to true
    }
  });

  return result; // return result
}

console.log(isReserved("monkey")); // false
console.log(isReserved("patch")); // false
console.log(isReserved("switch")); // should be: true

// Yep
