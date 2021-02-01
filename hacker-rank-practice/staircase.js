// https://www.hackerrank.com/challenges/staircase/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function staircase(n) {
  const hashtag = '#';
  const spaces = ' ';
  for (let i = 1; i <= n; i++ ) {
    console.log(spaces.repeat(n-i) + hashtag.repeat(i))
  }

}

console.log(staircase(7))