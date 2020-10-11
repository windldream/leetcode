/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function (houses, cost, m, n, target) {
  const dp = Array(m)
    .fill(0)
    .map(() =>
      Array(n + 1)
        .fill(0)
        .map(() => Array(target + 1).fill(Infinity))
    )
  if (houses[0] !== 0) {
    dp[0][houses[0]][1] = 0
  } else {
    for (let i = 1; i <= n; i++) {
      dp[0][i][1] = cost[0][i - 1]
    }
  }
  for (let i = 1; i < m; i++) {
    if (houses[i] === 0) {
      for (let j1 = 1; j1 <= n; j1++) {
        for (let k = 1; k <= target; k++) {
          for (let j2 = 1; j2 <= n; j2++) {
            if (j1 === j2) {
              dp[i][j1][k] = Math.min(dp[i][j1][k], dp[i - 1][j2][k] + cost[i][j1 - 1])
            } else {
              dp[i][j1][k] = Math.min(dp[i][j1][k], dp[i - 1][j2][k - 1] + cost[i][j1 - 1])
            }
          }
        }
      }
    } else {
      for (let k = 1; k <= target; k++) {
        for (let j2 = 1; j2 <= n; j2++) {
          let j1 = houses[i]
          if (j1 === j2) {
            dp[i][j1][k] = Math.min(dp[i][j1][k], dp[i - 1][j2][k])
          } else {
            dp[i][j1][k] = Math.min(dp[i][j1][k], dp[i - 1][j2][k - 1])
          }
        }
      }
    }
  }

  let ans = Infinity
  for (let i = 1; i <= n; i++) {
    ans = Math.min(ans, dp[m - 1][i][target])
  }
  return ans === Infinity ? -1 : ans
}
