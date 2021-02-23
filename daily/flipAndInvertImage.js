/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  const m = A.length
  for (let i = 0; i < m; i++) {
    A[i].reverse()
    for (let j = 0; j < A[i].length; j++) {
      A[i][j] = 1 - A[i][j]
    }
  }
  return A
}
