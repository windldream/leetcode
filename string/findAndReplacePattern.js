/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const ans = []
  for (const word of words) {
    if (isMatch(word, pattern)) {
      ans.push(word)
    }
  }
  return ans

  function isMatch(a, b) {
    const len = a.length
    const map = new Map()
    for (let i = 0; i < len; i++) {
      if (map.has(a[i])) {
        if (map.get(a[i]) !== b[i]) return false
      } else {
        for (const [key, val] of map) {
          if (val === b[i]) return false
        }
        map.set(a[i], b[i])
      }
    }
    return true
  }
}

findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb')
