/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let a = 0
  let b = 0
  let c = 0
  const dp = Array(n).fill(0)
  dp[0] = 1
  for (let i = 1; i < n; i++) {
    let num = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5)
    if (num === dp[a] * 2) {
      a++
    }
    if (num === dp[b] * 3) {
      b++
    }
    if (num === dp[c] * 5) {
      c++
    }
    dp[i] = num
  }
  return dp[n - 1]
}

nthUglyNumber(10)
