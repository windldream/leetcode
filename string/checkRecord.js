/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let a = 0
  let l = 0
  for (const c of s) {
    if (c === 'A') {
      if (a === 1) return false
      a++
      l = 0
    } else if (c === 'L') {
      if (l === 2) return false
      l++
    } else {
      l = 0
    }
  }
  return true
}
