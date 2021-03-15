/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0))
  let rowStart = 0
  let rowEnd = n - 1
  let colStart = 0
  let colEnd = n - 1
  let num = 1
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let col = colStart; col <= colEnd; col++) {
      matrix[rowStart][col] = num++
    }
    rowStart += 1
    if (rowStart > rowEnd) break

    for (let row = rowStart; row <= rowEnd; row++) {
      matrix[row][colEnd] = num++
    }
    colEnd -= 1
    if (colStart > colEnd) break

    for (let col = colEnd; col >= colStart; col--) {
      matrix[rowEnd][col] = num++
    }
    rowEnd -= 1
    if (rowStart > rowEnd) break

    for (let row = rowEnd; row >= rowStart; row--) {
      matrix[row][colStart] = num++
    }
    colStart += 1
    if (colStart > colEnd) break
  }
  return matrix
}
