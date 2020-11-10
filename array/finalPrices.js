/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const ans = []
  const len = prices.length
  for (let i = 0; i < len; i++) {
    let discount = Infinity
    for (let j = i + 1; j < len; j++) {
      if (prices[j] <= prices[i]) {
        discount = prices[j]
        break
      }
    }
    if (discount === Infinity) {
      ans.push(prices[i])
    } else {
      ans.push(prices[i] - discount)
    }
  }
  return ans
}
