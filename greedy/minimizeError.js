/**
 * @param {string[]} prices
 * @param {number} target
 * @return {string}
 */
var minimizeError = function (prices, target) {
  const dp = Array(target).fill(0)
  const len = prices.length
  for (let i = 0; i < len; i++) {
    const val = Math.floor(prices[i])
    target -= val
    prices[i] -= val
    if (target < 0) return '-1'
  }
  prices = prices.filter((val) => val > 0)
  if (target > prices.length) return '-1'

  prices.sort((a, b) => b - a)
  let ans = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] === 0) continue
    if (i < target) {
      ans += 1 - prices[i]
    } else {
      ans += prices[i]
    }
  }
  return ans.toFixed(3) + ''
}

minimizeError(['2.000', '2.000', '2.000', '2.000', '2.000'], 11)
