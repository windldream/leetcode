/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }
  let len = prices.length,
    i = 0,
    maxProfit = 0,
    peak = prices[0],
    valley = prices[0];

  while (i < len - 1) {
    while (i < len - 1 && prices[i] >= prices[i + 1]) {
      i++;
    }
    valley = prices[i];

    while (i < len - 1 && prices[i] <= prices[i + 1]) {
      i++;
    }
    peak = prices[i];

    maxProfit += peak - valley;
  }

  return maxProfit;
};