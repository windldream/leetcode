/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findSquare = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const prefixSum = Array(m + 1)
    .fill(0)
    .map(() =>
      Array(n + 1)
        .fill(0)
        .map(() => Array(2).fill(0))
    )
  // 0 -> row, 1 -> col
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === 0) {
        prefixSum[i][j][0] = 1 + prefixSum[i][j - 1][0]
        prefixSum[i][j][1] = 1 + prefixSum[i - 1][j][1]
      }
    }
  }

  const res = []
  let l = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = Math.min(prefixSum[i][j][0], prefixSum[i][j][1]); k >= 1; k--) {
        if (prefixSum[i][j - k + 1][1] >= k && prefixSum[i - k + 1][j][0] >= k) {
          if (k > l) {
            l = k
            res[0] = i - k
            res[1] = j - k
            res[2] = k
            break
          }
        }
      }
    }
  }

  return res.length > 0 ? res : []
}

findSquare([
  [1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 1, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 0, 1, 1, 1]
])
