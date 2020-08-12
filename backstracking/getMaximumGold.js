/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let max = -Infinity
  const arr = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const visited = new Set()
      const cur = 0
      dfs(i, j, cur, visited)
    }
  }

  return max

  function dfs(i, j, cur, visited) {
    if (i >= 0 && i < m && j >= 0 && j < n && !visited.has(i + ',' + j) && grid[i][j] !== 0) {
      for (let k = 0; k < arr.length; k++) {
        visited.add(i + ',' + j)
        dfs(i + arr[k][0], j + arr[k][1], cur + grid[i][j], visited)
        visited.delete(i + ',' + j)
      }
    }
    max = Math.max(cur, max)
  }
}
