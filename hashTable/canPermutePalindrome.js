/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const map = new Map()
  for (const c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c) - 1)
      if (map.get(c) === 0) map.delete(c)
    } else {
      map.set(c, 1)
    }
  }

  return map.size === 1 || map.size === 0
}
