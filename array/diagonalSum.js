/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const len = mat.length
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum += mat[i][i]
  }

  for (let i = len - 1; i >= 0; i--) {
    sum += mat[i][len - i - 1]
  }
  if (len & 1) {
    sum -= mat[len >> 1][len >> 1]
  }
  return sum
}

diagonalSum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])
