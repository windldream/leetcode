/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  const m = matrix.length
  const n = matrix[0].length
  const presum = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      presum[i + 1][j + 1] = presum[i + 1][j] + presum[i][j + 1] - presum[i][j] + matrix[i][j]
    }
  }

  let ans = -Infinity
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let i1 = i + 1; i1 <= m; i1++) {
        for (let j1 = j + 1; j1 <= n; j1++) {
          const sum = presum[i1][j1] + presum[i][j] - presum[i1][j] - presum[i][j1]
          if (sum <= k) {
            ans = Math.max(ans, sum)
          }
        }
      }
    }
  }
  return ans
}

maxSumSubmatrix([[2, 2, -1]], 0)

// [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
// ]
