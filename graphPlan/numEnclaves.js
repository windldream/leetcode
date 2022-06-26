/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let total = 0
  let count = 0
  let isEdged = false

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dfs(grid, i, j)
        if (isEdged) total -= count
        count = 0
        isEdged = false
      }
    }
  }

  return total

  function dfs(grid, i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      isEdged = true
      return
    }

    if (grid[i][j] === 0) return

    grid[i][j] = 0

    total++
    count++
    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
    dfs(grid, i, j + 1)
  }
}
