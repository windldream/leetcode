/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = new Map()
  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1)
  }

  const keys = [...map.keys()].sort((a, b) => map.get(b) - map.get(a))
  let ans = ''
  for (const key of keys) {
    ans += key.repeat(map.get(key))
  }
  return ans
}
