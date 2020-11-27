/**
 * @param {number} N
 * @return {number}
 */
var maxA = function (N) {
  const dp = Array(N + 1).fill(0)
  for (let i = 1; i <= N; i++) {
    dp[i] = dp[i - 1] + 1
    for (let j = 2; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[j - 2] * (i - j + 1))
    }
  }
  return dp[N]
}

maxA(7)

// 1    2      3       4        5
// A Ctrl-A Ctrl-C Ctrl-V 2A
// A A A A
//
