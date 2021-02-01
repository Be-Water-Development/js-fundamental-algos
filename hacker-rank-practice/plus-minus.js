// https://www.hackerrank.com/challenges/plus-minus/problem?h_r=next-challenge&h_v=zen

function plusMinus(arr) {
 let track = {"plus": 0, "minus": 0, zero: 0}
 arr.forEach((el) => {
   if (el > 0) track.plus ++;
   if (el < 0) track.minus ++;
   if (el === 0) track.zero ++;
 })

 console.log((track.plus / arr.length).toFixed(6)) ; // positive
 console.log((track.minus / arr.length).toFixed(6)) // negative
 console.log((track.zero / arr.length).toFixed(6)) // zero
}

const newArr = [0, 1, -3, -1, 2, 4, -2, 3];
console.log(plusMinus(newArr))