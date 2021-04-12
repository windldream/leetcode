/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const stack = []
  let max = 0
  for (const price of prices) {
    while (stack.length && stack[stack.length - 1] > price) {
      const last = stack.pop()
    }
    stack.push(price)
    if (stack.length > 1) max = Math.max(max, stack[stack.length - 1] - stack[0])
  }
  return max
}
