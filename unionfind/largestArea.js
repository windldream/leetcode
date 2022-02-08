/**
 * @param {string[]} grid
 * @return {number}
 */
var largestArea = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const visited = Array(m)
    .fill(0)
    .map(() => Array(n).fill(false))
  let ans = 0
  let isNextCorridor = false
  let count = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      search(grid, i, j, grid[i][j], visited)
      if (!isNextCorridor) ans = Math.max(ans, count)

      isNextCorridor = false
      count = 0
    }
  }

  return ans

  function search(grid, i, j, lastTheme, visited) {
    if (i < 0 || i >= m || j < 0 || j > n || visited[i][j] || (grid[i][j] !== lastTheme && grid[i][j] !== '0')) return

    visited[i][j] = true
    if (i === 0 || i === m - 1 || j === 0 || j === n - 1 || grid[i][j] === '0') {
      isNextCorridor = true
      visited[i][j] = false
      return
    }

    count++
    search(grid, i - 1, j, lastTheme, visited)
    search(grid, i + 1, j, lastTheme, visited)
    search(grid, i, j - 1, lastTheme, visited)
    search(grid, i, j + 1, lastTheme, visited)
  }
}
