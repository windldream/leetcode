/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  const n = questions.length
  const dp = Array(n).fill(0)

  for (let i = n - 1; i >= 0; i--) {
    const end = i + questions[i][1] + 1
    dp[i] = questions[i][0]

    if (end < n) dp[i] = questions[i][0] + dp[end]
    if (i < n - 1) dp[i] = Math.max(dp[i], dp[i + 1])
  }

  return dp[0]
}
