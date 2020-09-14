/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const len = s.length
  const k = p.length
  const map = new Map()
  for (const c of p) {
    if (!map.has(c)) {
      map.set(c, 0)
    }
    map.set(c, map.get(c) + 1)
  }

  const res = []
  const aMap = new Map()
  let l = 0
  let r = 0
  while (r < len) {
    if (!aMap.has(s[r])) {
      aMap.set(s[r], 0)
    }
    aMap.set(s[r], aMap.get(s[r]) + 1)
    if (r - l + 1 === k) {
      if (isEctopic(aMap, map)) {
        res.push(l)
      }
      aMap.set(s[l], aMap.get(s[l]) - 1)
      if (aMap.get(s[l]) === 0) {
        aMap.delete(s[l])
      }
      l++
    }
    r++
  }
  return res

  function isEctopic(aMap, map) {
    if (aMap.size !== map.size) return false
    for (const [key, val] of aMap) {
      if (val !== map.get(key)) return false
    }
    return true
  }
}
