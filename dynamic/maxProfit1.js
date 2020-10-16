/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length
  let ans = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      ans = Math.max(ans, prices[j] - prices[i])
    }
  }
  return ans
}
