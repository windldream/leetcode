/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s !== t && isEqual(getChMap(s), getChMap(t))

  function getChMap(str) {
    const map = new Map()

    for (const ch of str) {
      if (!map.has(ch)) map.set(ch, 0)
      map.set(ch, map.get(ch) + 1)
    }

    return map
  }

  function isEqual(a, b) {
    if (a.size !== b.size) return false

    for (const [key, val] of a) {
      if (val !== b.get(key)) return false
    }

    return true
  }
}
