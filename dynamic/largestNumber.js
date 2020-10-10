/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function (cost, target) {
  const len = cost.length
  const weights = Array(10).fill(0)
  for (let i = 0; i < len; i++) {
    weights[i + 1] = cost[i]
  }
  const dp = Array(10)
    .fill(0)
    .map(() => Array(target + 1).fill(''))

  for (let i = 1; i <= target; i++) {
    dp[0][i] = '#'
  }
  for (let i = 1; i < 10; i++) {
    for (let j = 0; j <= target; j++) {
      const rest = j - weights[i]
      dp[i][j] = maxString(dp[i - 1][j], rest >= 0 && dp[i][rest] !== '#' ? i + dp[i][rest] : '')
    }
  }

  return dp[9][target] === '#' ? '0' : dp[9][target]

  function maxString(a, b) {
    const len1 = a.length
    const len2 = b.length
    if (len1 > len2) return a
    else if (len1 < len2) return b
    let i = 0
    while (i < len1) {
      if (a[i] > b[i]) return a
      if (a[i] < b[i]) return b
      i++
    }
    return b
  }
}
