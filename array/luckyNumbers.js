/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const m = matrix.length
  const ans = []
  for (let i = 0; i < m; i++) {
    const min = Math.min(...matrix[i])
    const col = matrix[i].indexOf(min)
    let max = -Infinity
    for (let i = 0; i < m; i++) {
      max = Math.max(max, matrix[i][col])
    }
    if (min === max) ans.push(min)
  }
  return ans
}

luckyNumbers([
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17]
])
