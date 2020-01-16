/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const len = cost.length,
    dp = [];

  if (len < 2) {
    return 0;
  }

  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < len; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
  }

  return Math.min(dp[len - 1], dp[len - 2]);
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
