/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  const n = grid.length
  let ans = 0
  for (let i = 0; i < n; i++) {
    let maxRow = 0
    let maxCol = 0
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) ans++
      maxRow = Math.max(maxRow, grid[i][j])
      maxCol = Math.max(maxCol, grid[j][i])
    }
    ans += maxRow + maxCol
  }
  return ans
}
