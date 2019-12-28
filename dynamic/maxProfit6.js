/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  if (prices.length === 0) {
    return 0;
  }

  const len = prices.length,
    dp = [];

  for (let i = 0; i < len; i++) {
    dp[i] = [];
    if (i === 0) {
      dp[i][0] = 0;
      dp[i][1] = -prices[i];
      continue;
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return dp[len - 1][0];
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))