/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  let l3 = 0
  let l5 = 0
  let l7 = 0
  const dp = [1]

  let i = 1
  while (i < k) {
    const min = Math.min(dp[l3] * 3, dp[l5] * 5, dp[l7] * 7)
    if (min === dp[l3] * 3) {
      l3++
    }
    if (min === dp[l5] * 5) {
      l5++
    }
    if (min === dp[l7] * 7) {
      l7++
    }
    dp[i++] = min
  }

  return dp[k - 1]
}

getKthMagicNumber(5)
