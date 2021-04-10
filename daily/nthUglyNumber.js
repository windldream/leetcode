/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const dp = Array(n).fill(0)
  dp[0] = 1
  let i = 0
  let j = 0
  let k = 0
  for (let idx = 1; idx < n; idx++) {
    const min = Math.min(dp[i] * 2, dp[j] * 3, dp[k] * 5)
    if (min === dp[i] * 2) i++
    if (min === dp[j] * 3) j++
    if (min === dp[k] * 5) k++
    dp[idx] = min
  }
  return dp[n - 1]
}
