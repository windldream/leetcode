/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function (matrix, k) {
  const m = matrix.length
  const n = matrix[0].length
  const preSum = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      preSum[i + 1][j + 1] = matrix[i][j] ^ preSum[i][j + 1] ^ preSum[i + 1][j] ^ preSum[i][j]
    }
  }

  const ans = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans.push(preSum[i + 1][j + 1])
    }
  }
  ans.sort((a, b) => b - a)
  return ans[k - 1]
}

kthLargestValue(
  [
    [5, 2, 3],
    [1, 6, 2],
    [2, 4, 6]
  ],
  2
)

// 1 ^ 5 ^ 2 ^ 5 ^ 5
