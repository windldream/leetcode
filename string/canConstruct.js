/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const countMap = new Map()
  for (const c of magazine) {
    if (!countMap.has(c)) {
      countMap.set(c, 0)
    }
    countMap.set(c, countMap.get(c) + 1)
  }

  for (const c of ransomNote) {
    if (!countMap.has(c) || countMap.get(c) < 1) {
      return false
    }
    countMap.set(c, countMap.get(c) - 1)
  }
  return true
}

canConstruct('a', 'b')
