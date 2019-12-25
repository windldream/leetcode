/**
 * @param {number} n
 * @return {number}
 */
// f(n) = f(n - 1) + f(n - 2)
var climbStairs = function (n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n];
};

console.log(climbStairs(2))