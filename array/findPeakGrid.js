/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  const m = mat.length
  const n = mat[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        (i - 1 < 0 || mat[i][j] > mat[i - 1][j]) &&
        (i + 1 >= m || mat[i][j] > mat[i + 1][j]) &&
        (j - 1 < 0 || mat[i][j] > mat[i][j - 1]) &&
        (j + 1 >= n || mat[i][j] > mat[i][j + 1])
      ) {
        return [i, j]
      }
    }
  }
}
