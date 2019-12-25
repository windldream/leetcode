/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// acbacd
// abcadf
var minDistance = function (word1, word2) {
  const m = word1.length,
    n = word2.length,
    dp = [];

  for (let i = 0; i <= m; i++) {
    dp[i] = [];
  }
  dp[0][0] = 0;

  // 第一列
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }

  // 第一列
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + 1;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
};

console.log(minDistance('intention', 'execution'))