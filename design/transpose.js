/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const ans = Array(n)
    .fill(0)
    .map(() => [])
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[j][i] = matrix[i][j]
    }
  }
  return ans
}

transpose([
  [1, 2, 3],
  [4, 5, 6]
])

// 00 => 00
// 01 => 10
// 02 => 20
