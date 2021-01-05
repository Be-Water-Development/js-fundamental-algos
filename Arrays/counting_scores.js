//Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

// Good- I'm updating to show the shorthand-- using implicit returns; drop the return statement and use () instead of {}
// this is how you would see this written professionally
const countScores = (arr) => arr.filter((el) => (el >= 100).length);

console.log(countScores(scores));
