/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = new Map()
  for (const c of s) {
    if (!map.has(c)) {
      map.set(c, 0)
    }
    map.set(c, map.get(c) + 1)
  }

  let count = 0
  let hasOne = 0
  for (const [key, val] of map) {
    if (val >> 1 > 0) {
      if (val & 1) {
        count += val - 1
        hasOne = 1
      } else {
        count += val
      }
    } else {
      hasOne = 1
    }
  }

  return count + hasOne
}
