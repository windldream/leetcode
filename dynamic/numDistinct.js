/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const len1 = s.length, len2 = t.length, dp = [];

  if (len1 < len2) {
    return 0;
  }

  if (len1 === len2) {
    return s === t ? 1 : 0;
  }

  // dp[i][j] 代表T前i字符串可以由S前j字符串组成最多个数.
  dp[0] = [];
  for (let j = 0; j <= len1; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i <= len2; i++) {
    dp[i] = [];
    dp[i][0] = 0;
    for (let j = 1; j <= len1; j++) {
      if (t[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  return dp[len2][len1];
};

console.log(numDistinct('babgbag', 'bag'))