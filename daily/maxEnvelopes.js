/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })
  const n = envelopes.length
  if (n === 0) return 0

  const dp = Array(n).fill(0)
  let ans = 0
  for (let i = 0; i < n; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (envelopes[j][0] < envelopes[i][0] && envelopes[j][1] < envelopes[i][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    ans = Math.max(ans, dp[i])
  }
  return ans
}

maxEnvelopes([
  [5, 4],
  [6, 4],
  [6, 7],
  [2, 3]
])
