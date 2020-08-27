/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const map = new Map()
  for (let i = 0; i <= s.length - 10; i++) {
    const key = s.substr(i, 10)
    if (!map.has(key)) {
      map.set(key, 0)
    }
    map.set(key, map.get(key) + 1)
  }

  const res = []
  for (const [key, val] of map) {
    if (val > 1) {
      res.push(key)
    }
  }
  return res
}
