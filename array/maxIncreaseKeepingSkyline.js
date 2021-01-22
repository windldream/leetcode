/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const n = grid.length
  const m = grid[0].length
  let sum = 0
  const rows = Array(n).fill(0)
  const cols = Array(m).fill(0)
  for (let i = 0; i < n; i++) {
    rows[i] = Math.max(...grid[i])
  }
  for (let i = 0; i < m; i++) {
    let max = 0
    for (let j = 0; j < n; j++) {
      max = Math.max(max, grid[j][i])
      sum += grid[j][i]
    }
    cols[i] = max
  }

  let newSum = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      grid[i][j] = Math.min(rows[i], cols[j])
      newSum += grid[i][j]
    }
  }

  return newSum - sum
}

maxIncreaseKeepingSkyline([
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0]
])
