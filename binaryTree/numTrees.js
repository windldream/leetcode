/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let dp = [];

  // dp[i] = f(i - 1) + f(n - i)
  // dp[1] + dp[2] + ... + dp[n] = f(0) * f(n - 1) + f(1) * f(n - 2) + ... + f(n - 1) * f(0)
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