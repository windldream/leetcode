/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function (grid) {
  const dirs = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0]
  ]
  const n = grid.length
  const m = grid[0].length
  const visited = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false))
  const set = new Set()
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        let temp = []
        dfs(visited, i, j, temp, i, j)
        set.add(temp.join(''))
      }
    }
  }
  return set.size

  function dfs(visited, i, j, arr, i1, j1) {
    visited[i][j] = true
    arr.push([i - i1] + '&' + [j - j1])
    for (const [dx, dy, dz] of dirs) {
      const x = dx + i
      const y = dy + j
      if (x >= 0 && x < n && y >= 0 && y < m && grid[x][y] === 1 && !visited[x][y]) {
        dfs(visited, x, y, arr, i1, j1)
      }
    }
  }
}
