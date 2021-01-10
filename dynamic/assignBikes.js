/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
const assignBikes = function (workers, bikes) {
  const n = workers.length
  const m = bikes.length
  const mask = 2 ** m
  const dp = Array(n)
    .fill(0)
    .map(() => Array(mask).fill(Infinity))
  for (let i = 0; i < n; i++) {
    dp[i][0] = 0
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < mask; j++) {
      for (let k = 0; k < m; k++) {
        if ((j & (1 << k)) === 0) {
          const dis = Math.abs(workers[i][0] - bikes[k][0]) + Math.abs(workers[i][1] - bikes[k][1])
          const s = j + (1 << k)
          dp[i][s] = Math.min(i - 1 >= 0 ? dp[i - 1][j] + dis : dis, dp[i][s])
        }
      }
    }
  }

  return dp[n - 1][mask - 1]
}

// 1, 1, 1 -> 001 ->

assignBikes(
  [
    [0, 0],
    [2, 1]
  ],
  [
    [1, 2],
    [3, 3]
  ]
)
