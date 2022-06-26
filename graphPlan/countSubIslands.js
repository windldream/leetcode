/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  const m = grid1.length
  const n = grid1[0].length
  let isLand = true
  let count = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1) {
        dfs(i, j)
        if (isLand) count++
        isLand = true
      }
    }
  }

  return count

  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid2[i][j] === 0) return

    if (grid1[i][j] !== 1) {
      isLand = false
      return
    }

    grid2[i][j] = 0
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
}
