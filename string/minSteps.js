/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const map = new Map()
  for (const c of s) {
    if (!map.has(c)) {
      map.set(c, 0)
    }
    map.set(c, map.get(c) + 1)
  }

  let ans = 0
  for (const c of t) {
    if (map.get(c) > 0) {
      map.set(c, map.get(c) - 1)
    } else {
      ans++
    }
  }
  return ans
}
