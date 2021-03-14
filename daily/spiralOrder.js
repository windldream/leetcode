/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const ans = []
  const m = matrix.length
  const n = matrix[0].length
  let rowS = 0
  let rowE = m - 1
  let colS = 0
  let colE = n - 1
  while (rowS <= rowE && colS <= colE) {
    for (let col = colS; col <= colE; col++) {
      ans.push(matrix[rowS][col])
    }
    rowS += 1
    if (rowS > rowE) break

    for (let row = rowS; row <= rowE; row++) {
      ans.push(matrix[row][colE])
    }
    colE -= 1
    if (colS > colE) break

    for (let col = colE; col >= colS; col--) {
      ans.push(matrix[rowE][col])
    }
    rowE -= 1
    if (rowS > rowE) break

    for (let row = rowE; row >= rowS; row--) {
      ans.push(matrix[row][colS])
    }
    colS += 1
    if (colS > colE) break
  }
  return ans
}
