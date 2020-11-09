/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const len = arr.length
  const ans = Array(len).fill(0)
  let cur = -Infinity
  for (let i = len - 1; i >= 0; i--) {
    if (i === len - 1) {
      ans[i] = -1
    } else {
      ans[i] = cur
    }
    cur = Math.max(cur, arr[i])
  }
  return ans
}
