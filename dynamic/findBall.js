/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findBall = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const ans = []
  for (let i = 0; i < n; i++) {
    ans.push(dfs(0, i, grid))
  }
  return ans

  function dfs(row, col, grid) {
    if (row === m) return col
    if ((grid[row][col] === 1 && col === n - 1) || (grid[row][col] === -1 && col === 0)) return -1
    if ((grid[row][col] === 1 && grid[row][col + 1] === -1) || (grid[row][col] === -1 && grid[row][col - 1] === 1))
      return -1
    if (grid[row][col] === 1) {
      return dfs(row + 1, col + 1, grid)
    } else {
      return dfs(row + 1, col - 1, grid)
    }
  }
}

findBall([
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1],
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1]
])
