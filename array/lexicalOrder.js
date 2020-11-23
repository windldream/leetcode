/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const ans = []
  dfs(ans, 0, n)
  return ans

  function dfs(ans, curVal, maxNum) {
    if (curVal > maxNum) return
    if (curVal !== 0) ans.push(curVal)
    for (let i = 0; i <= 9; i++) {
      if (curVal === 0 && i === 0) continue
      dfs(ans, curVal * 10 + i, maxNum)
    }
  }
}
