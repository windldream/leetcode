/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let len = prices.length,
    maxProfit = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      maxProfit = Math.max(prices[j] - prices[i], maxProfit);
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 6, 4, 3, 1]))