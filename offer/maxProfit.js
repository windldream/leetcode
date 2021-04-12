/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   const stack = []
//   let max = 0
//   for (const price of prices) {
//     while (stack.length && stack[stack.length - 1] > price) {
//       const last = stack.pop()
//     }
//     stack.push(price)
//     if (stack.length > 1) max = Math.max(max, stack[stack.length - 1] - stack[0])
//   }
//   return max
// }

var maxProfit = function (prices) {
  const n = prices.length
  let min = prices[0]
  let ans = 0
  for (let i = 1; i < n; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else {
      ans = Math.max(ans, prices[i] - min)
    }
  }
  return ans
}
