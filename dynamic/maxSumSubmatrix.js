/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// TODO 每天多看几遍该解法
var maxSumSubmatrix = function (matrix, k) {
  const row = matrix.length,
    col = matrix[0].length;
  let res = -Infinity;

  for (let i = 0; i < col; i++) {
    let rowSum = Array(row).fill(0);
    for (let j = i; j < col; j++) {
      let sum = 0,
        max = -Infinity;
      // 第r行单行矩阵的和
      for (let r = 0; r < row; r++) {
        rowSum[r] += matrix[r][j];
        if (sum < 0) {
          sum = 0;
        }
        sum += rowSum[r];
        max = Math.max(max, sum);
      }
      if (max <= k) {
        res = Math.max(res, max);
      } else {
        // 第m行到第n行之间矩阵的和
        max = -Infinity;
        for (let m = 0; m < row; m++) {
          sum = 0;
          for (let n = m; n < row; n++) {
            sum += rowSum[n];
            if (sum <= k) {
              max = Math.max(max, sum);
            }
          }
        }
        res = Math.max(res, max);
      }
      if (res === k) {
        return k;
      }
    }
  }
  return res;
}

console.log(
  maxSumSubmatrix(
    [
      [2, 2, -1]
    ],
    0
  )
)