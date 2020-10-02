/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const visited = new Set()
  let ans = false
  dfs(0, 0)
  return ans

  function dfs(i, j) {
    if (i === m - 1 && j === n - 1) {
      ans = true
      return
    }
    if (i >= 0 && i < m && j >= 0 && j < n && !visited.has(i + '&' + j + '&' + grid[i][j])) {
      visited.add(i + '&' + j + '&' + grid[i][j])
      switch (grid[i][j]) {
        case 1:
          if (
            i >= 0 &&
            i < m &&
            j - 1 >= 0 &&
            j - 1 < n &&
            (grid[i][j - 1] === 1 || grid[i][j - 1] === 4 || grid[i][j - 1] === 6)
          ) {
            dfs(i, j - 1)
          }
          if (
            i >= 0 &&
            i < m &&
            j + 1 >= 0 &&
            j + 1 < n &&
            (grid[i][j + 1] === 1 || grid[i][j + 1] === 3 || grid[i][j + 1] === 5)
          ) {
            dfs(i, j + 1)
          }
          break
        case 2:
          if (
            i + 1 >= 0 &&
            i + 1 < m &&
            j >= 0 &&
            j < n &&
            (grid[i + 1][j] === 2 || grid[i + 1][j] === 5 || grid[i + 1][j] === 6)
          ) {
            dfs(i + 1, j)
          }
          if (
            i - 1 >= 0 &&
            i - 1 < m &&
            j >= 0 &&
            j < n &&
            (grid[i - 1][j] === 2 || grid[i - 1][j] === 3 || grid[i - 1][j] === 4)
          ) {
            dfs(i - 1, j)
          }
          break
        case 3:
          if (
            i >= 0 &&
            i < m &&
            j - 1 >= 0 &&
            j - 1 < n &&
            (grid[i][j - 1] === 1 || grid[i][j - 1] === 4 || grid[i][j - 1] === 6)
          ) {
            dfs(i, j - 1)
          }
          if (
            i + 1 >= 0 &&
            i + 1 < m &&
            j >= 0 &&
            j < n &&
            (grid[i + 1][j] === 2 || grid[i + 1][j] === 5 || grid[i + 1][j] === 6)
          ) {
            dfs(i + 1, j)
          }
          break
        case 4:
          if (
            i >= 0 &&
            i < m &&
            j + 1 >= 0 &&
            j + 1 < n &&
            (grid[i][j + 1] === 1 || grid[i][j + 1] === 3 || grid[i][j + 1] === 5)
          ) {
            dfs(i, j + 1)
          }
          if (
            i + 1 >= 0 &&
            i + 1 < m &&
            j >= 0 &&
            j < n &&
            (grid[i + 1][j] === 2 || grid[i + 1][j] === 5 || grid[i + 1][j] === 6)
          ) {
            dfs(i + 1, j)
          }
          break
        case 5:
          if (
            i >= 0 &&
            i < m &&
            j - 1 >= 0 &&
            j - 1 < n &&
            (grid[i][j - 1] === 1 || grid[i][j - 1] === 4 || grid[i][j - 1] === 6)
          ) {
            dfs(i, j - 1)
          }
          if (
            i - 1 >= 0 &&
            i - 1 < m &&
            j >= 0 &&
            j < n &&
            (grid[i - 1][j] === 2 || grid[i - 1][j] === 3 || grid[i - 1][j] === 4)
          ) {
            dfs(i - 1, j)
          }
          break
        case 6:
          if (
            i - 1 >= 0 &&
            i - 1 < m &&
            j >= 0 &&
            j < n &&
            (grid[i - 1][j] === 2 || grid[i - 1][j] === 3 || grid[i - 1][j] === 4)
          ) {
            dfs(i - 1, j)
          }
          if (
            i >= 0 &&
            i < m &&
            j + 1 >= 0 &&
            j + 1 < n &&
            (grid[i][j + 1] === 1 || grid[i][j + 1] === 3 || grid[i][j + 1] === 5)
          ) {
            dfs(i, j + 1)
          }
          break
      }
    }
  }
}
