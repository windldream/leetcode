/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const len = s.length
  if (len === 0) return ' '
  const map = new Map()
  for (const c of s) {
    if (!map.has(c)) {
      map.set(c, 0)
    }
    map.set(c, map.get(c) + 1)
  }

  for (const c of s) {
    if (map.get(c) === 1) return c
  }
  return ' '
}
