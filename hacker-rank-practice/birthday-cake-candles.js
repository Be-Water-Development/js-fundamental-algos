// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

const candlesOne = [5, 6, 6, 6, 3, 2]
const candlesTwo = [6, 3, 3, 8, 2]

function birthdayCakeCandles(candles) {
  const maxHeight = Math.max(...candles);
  return candles.filter((el) => {
    return el === maxHeight
  }).length;
}

console.log(birthdayCakeCandles(candlesOne))
console.log(birthdayCakeCandles(candlesTwo))