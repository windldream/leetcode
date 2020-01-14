/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  if (n < 2) {
    return 0;
  }

  const dp = [];
  const maxFactor = Math.floor(Math.sqrt(n));

  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = i;
    for (let j = 2; j <= maxFactor; j++) {
      if (i % j === 0) {
        dp[i] = dp[j] + dp[i / j];
      }
    }
  }

  return dp[n];
};

console.log(minSteps(9));
