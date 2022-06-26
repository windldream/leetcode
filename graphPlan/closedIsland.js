/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let num = 0
  let closed = true

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        isLand(grid, i, j)
        num += closed
        closed = true
      }
    }
  }

  return num

  function isLand(grid, i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      closed = false
      return
    }

    if (grid[i][j] === 1) return

    grid[i][j] = 1

    isLand(grid, i + 1, j)
    isLand(grid, i - 1, j)
    isLand(grid, i, j + 1)
    isLand(grid, i, j - 1)
  }
}
