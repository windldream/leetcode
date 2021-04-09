/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  if (n === 0) return 0
  const dp = Array(n).fill(0)
  dp[0] = 1
  let i = 0
  let j = 0
  let k = 0
  for (let idx = 1; idx < n; idx++) {
    const tmp = Math.min(dp[i] * 2, dp[j] * 3, dp[k] * 5)
    if (tmp === dp[i] * 2) i++
    if (tmp === dp[j] * 3) j++
    if (tmp === dp[k] * 5) k++
    dp[idx] = tmp
  }
  return dp[n - 1]
}

// n

// 3 4 5
// 4 5 6
// 5 6 8
//
