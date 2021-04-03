/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length
  if (m === 0) return []
  const n = matrix[0].length
  if (n === 0) return []

  const ans = []
  let rowStart = 0
  let rowEnd = m - 1
  let colStart = 0
  let colEnd = n - 1
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let col = colStart; col <= colEnd; col++) {
      ans.push(matrix[rowStart][col])
    }
    rowStart += 1
    if (rowStart > rowEnd) break

    for (let row = rowStart; row <= rowEnd; row++) {
      ans.push(matrix[row][colEnd])
    }
    colEnd -= 1
    if (colStart > colEnd) break

    for (let col = colEnd; col >= colStart; col--) {
      ans.push(matrix[rowEnd][col])
    }
    rowEnd -= 1
    if (rowStart > rowEnd) break

    for (let row = rowEnd; row >= rowStart; row--) {
      ans.push(matrix[row][colStart])
    }
    colStart += 1
  }

  return ans
}
