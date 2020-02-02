/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
  const row = mat.length,
    col = mat[0].length,
    sumArr = Array(row + 1)
      .fill(0)
      .map(() => Array(col + 1).fill(0)),
    dp = Array(row)
      .fill(0)
      .map(() => Array(col).fill(0));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      sumArr[i + 1][j + 1] =
        sumArr[i][j + 1] + sumArr[i + 1][j] - sumArr[i][j] + mat[i][j];
    }
  }

  /**
   * 1 2 3
   * 4 5 6
   * 7 8 9
   */
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let r1 = Math.max(0, i - K),
        r2 = Math.min(row - 1, i + K);
      let c1 = Math.max(0, j - K),
        c2 = Math.min(col - 1, j + K);
      dp[i][j] =
        sumArr[r2 + 1][c2 + 1] -
        sumArr[r1][c2 + 1] -
        sumArr[r2 + 1][c1] +
        sumArr[r1][c1];
    }
  }

  return dp;
};

console.log(
  matrixBlockSum(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    1
  )
);
