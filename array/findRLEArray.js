/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
var findRLEArray = function (encoded1, encoded2) {
  const ans = []
  const m = encoded1.length
  const n = encoded2.length
  let i = 0
  let j = 0

  while (i < m && j < n) {
    const min = Math.min(encoded1[i][1], encoded2[j][1])
    const val = encoded1[i][0] * encoded2[j][0]
    encoded1[i][1] -= min
    encoded2[j][1] -= min
    if (ans.length && ans[ans.length - 1][0] === val) {
      ans[ans.length - 1][1] += min
    } else {
      ans.push([val, min])
    }
    if (encoded1[i][1] === 0) i++
    if (encoded2[j][1] === 0) j++
  }

  return ans
}
