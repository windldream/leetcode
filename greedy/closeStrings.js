/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  const m = word1.length
  const n = word2.length
  if (m !== n) return false

  const mapA = getMap(word1)
  const mapB = getMap(word2)
  for (const [key, val] of mapA) {
    if (!mapB.has(key)) return false
  }
  for (const [key, val] of mapB) {
    if (!mapA.has(key)) return false
  }

  return [...mapA.values()].sort((a, b) => a - b).join('&') === [...mapB.values()].sort((a, b) => a - b).join('&')

  function getMap(word) {
    const map = new Map()
    for (const c of word) {
      if (!map.has(c)) {
        map.set(c, 0)
      }
      map.set(c, map.get(c) + 1)
    }
    return map
  }
}

closeStrings('abc', 'bca')
