/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
  const M = 10 ** 9 + 7,
    dp = Array(d + 1)
      .fill(0)
      .map(() => Array(target + 1).fill(0));

  for (let i = 1; i <= Math.min(f, target); i++) {
    dp[1][i] = 1;
  }

  for (let i = 2; i <= d; i++) {
    for (let j = i; j <= Math.max(d * f, target); j++) {
      for (let k = 1; j - k >= 0 && k <= f; k++) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % M;
      }
    }
  }

  return dp[d][target];
};
