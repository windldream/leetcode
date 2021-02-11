/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return [1, 1]

  const ans = [1, 1]
  let i = 1
  while (i < rowIndex) {
    const pre = ans.slice()
    for (let j = 1; j < ans.length; j++) {
      ans[j] = pre[j] + pre[j - 1]
    }
    ans[ans.length] = 1
    i++
  }
  return ans
}

getRow(3)
