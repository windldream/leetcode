/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let minCol = 0
  let minRow = 0
  let maxRow = matrix.length
  if (maxRow === 0) return []
  let maxCol = matrix[0].length
  if (maxCol === 0) return []
  const ans = []
  let r = 0
  let c = 0
  const total = maxRow * maxCol
  maxRow--
  maxCol--
  while (ans.length < total) {
    while (c <= maxCol && ans.length < total) {
      ans.push(matrix[r][c])
      c++
    }
    minRow++
    r = minRow
    c = maxCol

    while (r <= maxRow && ans.length < total) {
      ans.push(matrix[r][c])
      r++
    }
    maxCol--
    r = maxRow
    c = maxCol

    while (c >= minCol && ans.length < total) {
      ans.push(matrix[r][c])
      c--
    }
    maxRow--
    r = maxRow
    c = minCol

    while (r >= minRow && ans.length < total) {
      ans.push(matrix[r][c])
      r--
    }
    minCol++
    r = minRow
    c = minCol
  }
  return ans
}

spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
])
