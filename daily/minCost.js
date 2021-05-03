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

  if (houses[0] === 0) {
    for (let i = 1; i <= n; i++) {
      dp[0][i][1] = cost[0][i - 1]
    }
  } else {
    dp[0][houses[0]][1] = 0
  }

  for (let i = 1; i < m; i++) {
    if (houses[i] === 0) {
      for (let j = 1; j <= n; j++) {
        for (let t = 1; t <= target; t++) {
          for (let k = 1; k <= n; k++) {
            if (j === k) {
              dp[i][j][t] = Math.min(dp[i][j][t], dp[i - 1][k][t] + cost[i][j - 1])
            } else {
              dp[i][j][t] = Math.min(dp[i][j][t], dp[i - 1][k][t - 1] + cost[i][j - 1])
            }
          }
        }
      }
    } else {
      let j = houses[i]
      for (let t = 1; t <= target; t++) {
        for (let k = 1; k <= n; k++) {
          if (j === k) {
            dp[i][j][t] = Math.min(dp[i][j][t], dp[i - 1][k][t])
          } else {
            dp[i][j][t] = Math.min(dp[i][j][t], dp[i - 1][k][t - 1])
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
