/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  const m = grid1.length
  const n = grid1[0].length
  const visited = Array(m)
    .fill(0)
    .map(() => Array(n).fill(false))
  let count = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid2[i][j] === 1) {
        if (isSubIslands(i, j)) {
          count += 1
        }
      }
    }
  }
  return count

  function isSubIslands(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || grid2[i][j] === 0) return true
    visited[i][j] = true
    let f1 = isSubIslands(i - 1, j)
    let f2 = isSubIslands(i + 1, j)
    let f3 = isSubIslands(i, j - 1)
    let f4 = isSubIslands(i, j + 1)
    if (grid1[i][j] === 0) return false
    return f1 && f2 && f3 && f4
  }
}
