/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const len = s.length,
    dp = [];

  for (let i = 0; i < len; i++) {
    dp[i] = Array(len).fill(false);
  }

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (i === j) {
        dp[i][j] = true;
        continue;
      }
      if (s[i] === s[j]) {
        dp[i][j] = j - i <= 1 || dp[i + 1][j - 1];
      }
    }
  }

  let res = 0;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (dp[i][j]) {
        res++;
      }
    }
  }

  return res;
};
// 'dcabacd'
console.log(countSubstrings('aa'));
