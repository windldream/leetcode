/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const stack = []
  let ans = 0
  for (let i = 0; i < prices.length; i++) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop()
    }
    stack.push(prices[i])
    if (stack.length > 1) {
      ans = Math.max(ans, stack[stack.length - 1] - stack[0])
    }
  }
  return ans
}
