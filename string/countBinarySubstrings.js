/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  const len = s.length
  let last = 0,
    cur = 1,
    res = 0
  for (let i = 1; i < len; i++) {
    if (s[i] === s[i - 1]) {
      cur++
    } else {
      last = cur
      cur = 1
    }
    if (last >= cur) {
      res++
    }
  }
  return res
}

countBinarySubstrings('11100')
