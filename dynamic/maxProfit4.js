/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (prices.length === 0) {
    return 0;
  }

  if (k > Math.ceil(prices.length / 2)) {
    return maxProfitInfinity(prices);
  }

  const len = prices.length,
    dp = [];

  for (let i = 0; i < len; i++) {
    dp[i] = [];
    for (let j = k; j >= 0; j--) {
      dp[i][j] = [];
      dp[i][j][0] = 0;
      dp[i][j][1] = -prices[0];
    }
  }

  // 0表示当天没有持有股票 1表示当天持有股票
  for (let i = 0; i < len; i++) {
    for (let j = k; j >= 1; j--) {
      if (i === 0) {
        dp[i][j][0] = 0;
        dp[i][j][1] = -prices[i];
        continue;
      }
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
    }
  }
  console.log(maxProfitInfinity([1, 2, 3, 4, 5]))
  return dp[len - 1][k][0];

  function maxProfitInfinity(prices) {
    let len = prices.length,
      dp = [];

    for (let i = 0; i < len; i++) {
      dp[i] = [];
    }

    for (let i = 0; i < len; i++) {
      if (i === 0) {
        dp[i][0] = 0;
        dp[i][1] = -prices[0];
        continue;
      }
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }

    return dp[len - 1][0];
  }
};

console.log(maxProfit(2, [2, 4, 1]));