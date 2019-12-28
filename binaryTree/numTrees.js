/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let dp = [];

  // f(i) = f(i - 1) + f(n - i)
  // dp[n] = dp[0] * dp[n - 1] + dp[1] * dp[n - 2] + ... + dp[n - 1] * dp[0]
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = dp[i] || 0;
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
};