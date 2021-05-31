/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let count = 0
  let seen = new Set()
  let l = 0
  let r = 0
  while (r < s.length) {
    while (seen.has(s[r]) && l <= r) {
      seen.delete(s[l++])
    }
    seen.add(s[r++])
    while (r - l >= 3) {
      count += 1
      seen.delete(s[l++])
    }
  }
  return count
}
