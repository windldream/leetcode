/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const ans = []
  let prev = null
  for (let row = 0; row <= rowIndex; row++) {
    prev = ans.slice()
    for (let col = 0; col <= row; col++) {
      if (col === 0 || col === row) {
        ans[col] = 1
      } else {
        ans[col] = prev[col - 1] + prev[col]
      }
    }
  }
  return ans
}
