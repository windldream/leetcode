/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0;
  }

  const K = 2,
    len = prices.length,
    dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    dp[i][0] = 0;
  }

  for (let k = 0; k <= K; k++) {
    dp[0][k] = 0;
  }

  for (let k = 1; k <= K; k++) {
    for (let i = 1; i < len; i++) {
      let min = Number.MAX_VALUE;
      for (let j = 0; j <= i; j++) {
        min = Math.min(prices[j] - dp[j][k - 1], min);
      }
      dp[i][k] = Math.max(dp[i - 1][k], prices[i] - min);
    }
  }

  return dp[len - 1][K];
};

console.log(maxProfit([2, 4, 1]))