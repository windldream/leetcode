/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let num = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        num++
        dfs(grid, i, j)
      }
    }
  }

  return num

  function dfs(grid, r, c) {
    const m = grid.length
    const n = grid[0].length

    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] !== '1') return

    grid[r][c] = '0'
    dfs(grid, r + 1, c)
    dfs(grid, r - 1, c)
    dfs(grid, r, c + 1)
    dfs(grid, r, c - 1)
  }
}
