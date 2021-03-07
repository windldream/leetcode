/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0]
  ]
  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j)
        ans++
      }
    }
  }
  return ans

  function dfs(i, j) {
    grid[i][j] = '0'
    for (const [dx, dy] of dirs) {
      const x = dx + i
      const y = dy + j
      if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === '1') {
        dfs(x, y)
      }
    }
  }
}
