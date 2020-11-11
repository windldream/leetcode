/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  const rows = mat.length
  const cols = mat[0].length
  let ans = 0
  for (let i = 0; i < rows; i++) {
    outer: for (let j = 0; j < cols; j++) {
      if (mat[i][j]) {
        for (let c = 0; c < cols; c++) {
          if (c === j) continue
          if (mat[i][c]) continue outer
        }
        for (let r = 0; r < rows; r++) {
          if (r === i) continue
          if (mat[r][j]) continue outer
        }
        ans++
      }
    }
  }
  return ans
}
