/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const arr = s.split(' ')
  if (pattern.length !== arr.length) return false
  return check(pattern, arr) && check(arr, pattern)

  function check(a, b) {
    const map = new Map()
    for (let i = 0; i < a.length; i++) {
      const c = a[i]
      if (map.has(c)) {
        if (map.get(c) !== b[i]) return false
      }
      map.set(c, b[i])
    }
    return true
  }
}
