/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) return false
  const map = new Map()
  for (const c of s1) {
    if (!map.has(c)) {
      map.set(c, 0)
    }
    map.set(c, map.get(c) + 1)
  }

  for (const c of s2) {
    if (!map.has(c) || map.get(c) < 1) return false
    map.set(c, map.get(c) - 1)
  }
  return true
}
