/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const ans = []
  const len = s.length
  let i = 1
  let cur = 1
  while (i < len) {
    if (s[i] === s[i - 1]) {
      cur++
    } else {
      if (cur >= 3) {
        ans.push([i - cur, i - 1])
      }
      cur = 1
    }
    i++
  }
  if (cur >= 3) {
    ans.push([i - cur, i - 1])
  }
  return ans
}
