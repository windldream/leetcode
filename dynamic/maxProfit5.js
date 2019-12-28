/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length,
    dp = [],
    coolDay = [];

  if (len === 0) {
    return 0;
  }

  dp[-1] = [];
  dp[-1][0] = 0;
  dp[-1][1] = -Infinity;
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    if (i === 0) {
      dp[i][0] = 0;
      dp[i][1] = -prices[0];
      continue;
    }

    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
  }
  return dp[len - 1][0];
};

console.log(maxProfit([1, 2, 3, 0, 2]))