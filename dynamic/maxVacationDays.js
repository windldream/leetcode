/**
 * @param {number[][]} flights
 * @param {number[][]} days
 * @return {number}
 */
const maxVacationDays = function (flights, days) {
  const n = days.length
  const k = days[0].length
  // 表示第 k 个星期待在第 n 个城市的总休假数
  const dp = Array(k)
    .fill(0)
    .map(() => Array(n).fill(0))
  const visited = new Set()
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      dp[0][i] = days[i][0]
      visited.add(i)
    } else if (flights[0][i] === 1) {
      dp[0][i] = days[i][0]
      visited.add(i)
    }
  }

  for (let j = 1; j < k; j++) {
    for (let i = 0; i < n; i++) {
      if (!visited.has(i)) continue
      for (let k = 0; k < n; k++) {
        if (flights[i][k] === 1) {
          visited.add(k)
          dp[j][k] = Math.max(
            dp[j][k],
            dp[j - 1][i] + days[k][j],
            visited.has(k) ? dp[j - 1][k] + days[k][j] : dp[j - 1][k]
          )
        } else {
          dp[j][k] = Math.max(dp[j][k], visited.has(k) ? dp[j - 1][k] + days[k][j] : dp[j - 1][k])
        }
      }
    }
  }

  return Math.max(...dp[k - 1])
}

maxVacationDays(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0]
  ],
  [
    [0, 1, 1, 0, 0],
    [1, 2, 2, 1, 2],
    [2, 0, 0, 2, 1],
    [0, 2, 1, 2, 2],
    [0, 1, 1, 1, 0]
  ]
)
