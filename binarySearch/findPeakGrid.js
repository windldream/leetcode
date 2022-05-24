/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  let l = 0
  let r = mat[0].length - 1

  while (l <= r) {
    const mid = (l + r) >> 1
    const [max, row] = getColMax(mat, mid)

    if (mid === 0) {
      if (max > mat[row][1]) return [row, mid]
      else l = 1
    } else {
      if (mat[row][mid - 1] < max && max > mat[row][mid + 1]) return [row, mid]
      else if (mat[row][mid - 1] < max && max < mat[row][mid + 1]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }

  return [getColMax(mat, l)[1], l]

  function getColMax(mat, col) {
    let max = mat[0][col]
    let row = 0

    for (let i = 1; i < mat.length; i++) {
      if (mat[i][col] > max) {
        max = mat[i][col]
        row = i
      }
    }

    return [max, row]
  }
}
