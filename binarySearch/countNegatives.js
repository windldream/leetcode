/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let total = 0
  for (let i = 0; i < m; i++) {
    let lo = 0
    let hi = n
    while (lo < hi) {
      const mid = lo + ((hi - lo) >> 1)
      if (grid[i][mid] >= 0) {
        lo = mid + 1
      } else {
        hi = mid
      }
    }
    total += n - lo
  }
  return total
}
