/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function (events, k) {
  events.sort((a, b) => a[1] - b[1])
  const n = events.length
  const dp = Array(n)
    .fill(0)
    .map(() => Array(k + 1).fill(-Infinity))
  dp[0][0] = 0
  dp[0][1] = events[0][2]

  for (let i = 1; i < n; i++) {
    let l = 0
    let r = i
    while (l + 1 < r) {
      const mid = (l + r) >> 1
      if (events[mid][1] >= events[i][0]) {
        r = mid
      } else {
        l = mid
      }
    }

    if (events[l][1] < events[i][0]) {
      for (let j = 1; j <= k; j++) {
        dp[i][j] = Math.max(dp[i][j], dp[l][j - 1] + events[i][2])
      }
    } else {
      dp[i][1] = events[i][2]
    }

    for (let j = 0; j <= k; j++) {
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j])
    }
  }

  let ans = 0
  for (let i = 0; i <= k; i++) {
    ans = Math.max(ans, dp[n - 1][i])
  }
  return ans
}
