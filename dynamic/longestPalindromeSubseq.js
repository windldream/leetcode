/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const len = s.length,
    dp = [];

  for (let i = 0; i <= len; i++) {
    dp[i] = Array(len).fill(0);
  }

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (i === j) {
        dp[i][j] = 1;
        continue;
      }
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][len - 1];
};

console.log(longestPalindromeSubseq('bbbab'));
