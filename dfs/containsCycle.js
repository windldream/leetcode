/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  const visited = Array(m)
    .fill(0)
    .map(() => Array(n).fill(false))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '.') continue
      if (dfs(grid[i][j], i, j, -1, -1)) return true
    }
  }
  return false

  function dfs(char, x, y, px, py) {
    if (x < 0 || x >= m || y < 0 || y >= n) return false
    if (grid[x][y] !== char) return false
    if (visited[x][y]) return true
    visited[x][y] = true
    for (const [r, c] of dirs) {
      const dx = x + r
      const dy = y + c
      if (dx === px && dy === py) continue
      if (dfs(char, dx, dy, x, y)) return true
    }
    visited[x][y] = false
    grid[x][y] = '.'
    return false
  }
}
