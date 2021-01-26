/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] = matrix[i - 1][j] + 1
      }
    }
  }

  let ans = 0
  for (let i = 0; i < m; i++) {
    matrix[i].sort((a, b) => a - b)
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, matrix[i][j] * (n - j))
    }
  }
  return ans
}

largestSubmatrix([
  [0, 0, 1],
  [1, 1, 1],
  [1, 0, 1]
])
