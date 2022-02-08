/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let ans = 0
  let count = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      count = 0
      bfs(grid, i, j)
      ans = Math.max(ans, count)
    }
  }

  return ans

  function bfs(grid, i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) return

    count++
    grid[i][j] = 0
    bfs(grid, i - 1, j)
    bfs(grid, i + 1, j)
    bfs(grid, i, j - 1)
    bfs(grid, i, j + 1)
  }
}
