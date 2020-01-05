/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  let row = matrix.length,
    col = matrix[0].length,
    dp = []

  for (let i = 0; i < row; i++) {
    dp[i] = []
    dp[i][0] = 0;
    for (let j = 0; j < col; j++) {
      dp[i][j + 1] = dp[i][j] + matrix[i][j]
    }
  }

  let sum = -Infinity
  for (let row1 = 0; row1 < row; row1++) {
    for (let col1 = 0; col1 < col; col1++) {
      if (row === 1) {
        for (let col2 = col1; col2 < col; col2++) {
          let res = getSum(row1, col1, 0, col2, dp)
          if (res === k) {
            return res;
          }
          if (res < k) {
            sum = Math.max(sum, res)
          }
        }
        continue;
      }
      for (let row2 = row1; row2 < row; row2++) {
        for (let col2 = col1; col2 < col; col2++) {
          let res = getSum(row1, col1, row2, col2, dp)
          if (res === k) {
            return res
          }
          if (res < k) {
            sum = Math.max(sum, res)
          }
        }
      }
    }
  }

  return sum

  function getSum(row1, col1, row2, col2, sums) {
    let sum = 0
    if (row2) {
      for (let i = row1; i <= row2; i++) {
        sum += sums[i][col2 + 1] - sums[i][col1]
      }
    } else {
      sum = sums[row1][col2 + 1] - sums[row1][col1];
    }
    return sum
  }
}

console.log(
  maxSumSubmatrix(
    [
      [2, 2, -1]
    ],
    0
  )
)