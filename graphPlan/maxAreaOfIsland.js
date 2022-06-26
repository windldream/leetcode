/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let ans = 0
  let area = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        area = 0
        countArea(grid, i, j)
        ans = Math.max(ans, area)
      }
    }
  }

  return ans

  function countArea(grid, r, c) {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] !== 1) return

    grid[r][c] = 0
    area++
    countArea(grid, r + 1, c)
    countArea(grid, r - 1, c)
    countArea(grid, r, c + 1)
    countArea(grid, r, c - 1)
  }
}
