/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  const m = rowSum.length
  const n = colSum.length
  const ans = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[i][j] = Math.min(rowSum[i], colSum[j])
      rowSum[i] -= ans[i][j]
      colSum[j] -= ans[i][j]
    }
  }
  return ans
}

restoreMatrix([3, 8], [4, 7])
