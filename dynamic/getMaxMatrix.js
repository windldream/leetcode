/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var getMaxMatrix = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const prefixSum = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      prefixSum[i][j] = matrix[i - 1][j - 1] + prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1]
    }
  }

  let max = -Infinity
  const ans = []
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= i; k++) {
        for (let s = 1; s <= j; s++) {
          const sum = prefixSum[i][j] - prefixSum[i - k][j] - prefixSum[i][j - s] + prefixSum[i - k][j - s]
          if (sum > max) {
            max = sum
            ans[0] = i - k
            ans[1] = j - s
            ans[2] = i - 1
            ans[3] = j - 1
          }
        }
      }
    }
  }
  return ans
}

getMaxMatrix([[0]])
