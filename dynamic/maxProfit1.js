/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length
  if (len < 2) return 0
  let ans = 0
  let min = prices[0]
  for (let i = 1; i < len; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else {
      ans = Math.max(ans, prices[i] - min)
    }
  }
  return ans
}
