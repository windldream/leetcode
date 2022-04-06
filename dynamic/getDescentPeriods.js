/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
  const n = prices.length
  let a = 1
  let b = 1
  let ans = 1

  for (let i = 1; i < n; i++) {
    a = 1

    if (prices[i] === prices[i - 1] - 1) {
      a += b
    }

    ans += a
    b = a
  }

  return ans
}
