/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
  const dp = [],
    M = 10 ** 9 + 7;

  // dp[i][j]表示 1 到 i 中包含 j 个逆序对的个数
  for (let i = 0; i <= n; i++) {
    dp[i] = Array(k).fill(0);
    for (let j = 0; j <= k; j++) {
      if (i === 0 || i === 1) {
        if (j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = 0;
        }
      } else if (j === 0) {
        dp[i][j] = 1;
      } else {
        if (j >= i) {
          dp[i][j] = (dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - i] + M) % M;
        } else {
          dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % M;
        }
      }
    }
  }

  return dp[n][k];
};

console.log(kInversePairs(3, 2));
