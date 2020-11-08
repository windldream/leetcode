/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const m = grid.length
  const n = grid[0].length
  const ans = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans.push(grid[i][j])
    }
  }

  for (let i = 0; i < k; i++) {
    ans.unshift(ans.pop())
  }

  const res = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))
  for (let i = 0; i < ans.length; i++) {
    const r = Math.trunc(i / n)
    const c = i % n
    res[r][c] = ans[i]
  }
  return res
}

shiftGrid(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ],
  1
)
