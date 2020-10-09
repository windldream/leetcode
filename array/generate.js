/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows < 1) return []
  if (numRows === 1) return [[1]]
  const ans = []
  ans[0] = [1]
  ans[1] = [1, 1]
  for (let row = 2; row < numRows; row++) {
    ans[row] = []
    for (let col = 0; col <= row; col++) {
      if (col === 0 || col === row) {
        ans[row][col] = 1
      } else {
        ans[row][col] = ans[row - 1][col - 1] + ans[row - 1][col]
      }
    }
  }
  return ans
}
