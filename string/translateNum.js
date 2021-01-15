/**
 * @param {number} num
 * @return {number}
 */
const translateNum = function (num) {
  const baseCode = 'a'.charCodeAt()
  const maps = Array(26)
    .fill(0)
    .map((val, index) => String.fromCharCode(baseCode + index))
  const ans = new Set()
  dfs(0, '', num + '')
  return ans.size

  function dfs(index, str, num) {
    if (index >= num.length) {
      ans.add(str)
      return
    }
    dfs(index + 1, str + maps[num[index]], num)
    if (index + 2 <= num.length) {
      const pos = num.substring(index, index + 2)
      if (maps[pos]) {
        dfs(index + 2, str + maps[pos], num)
      }
    }
  }
}

translateNum(506)
