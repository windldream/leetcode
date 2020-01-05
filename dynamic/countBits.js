/**
 * @param {number} num
 * @return {number[]}
 */
// 0 -> 00
// 1 -> 01
// 2 -> 10
// 3 -> 11
// 4 -> 100
// 5 -> 101
// 6 -> 110 
var countBits = function (num) {
  let dp = [];
  for (let i = 0; i <= num; i++) {
    dp[i] = i.toString(2).split('').reduce((prev, curr) => {
      if (curr === '1') {
        return prev + 1
      }
      return prev;
    }, 0);
  }
  return dp;
};

console.log(countBits(5));