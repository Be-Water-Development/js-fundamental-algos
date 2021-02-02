// https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

const myArr = [4, 4, 6, 7, 9];
const secondArr = [54, 32, 41, 9, 2];

function miniMaxSum(arr) {
  const maxVal = Math.max(...arr);
  const minVal = Math.min(...arr);
  const minSum = arr.reduce((acc, val) => {
    return acc + val;
  }) - maxVal;
  const maxSum = arr.reduce((acc, val) => {
    return acc + val;
  }) - minVal;
  console.log(`${minSum} ${maxSum}`);
}

console.log(miniMaxSum(myArr));
console.log(miniMaxSum(secondArr));