/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {
  const m = mat.length
  const n = mat[0].length
  const sum = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      sum[i + 1][j + 1] = sum[i][j + 1] + sum[i + 1][j] - sum[i][j] + mat[i][j]
    }
  }

  let lo = 0
  let hi = Math.min(m, n)
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (!exist(mid)) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }
  return lo

  function exist(x) {
    for (let i = 0; i < m - x; i++) {
      for (let j = 0; j < n - x; j++) {
        if (getRegion(i, j, i + x, j + x) <= threshold) return true
      }
    }
    return false
  }

  function getRegion(x1, y1, x2, y2) {
    return sum[x2 + 1][y2 + 1] - sum[x1][y2 + 1] - sum[x2 + 1][y1] + sum[x1][y1]
  }
}
