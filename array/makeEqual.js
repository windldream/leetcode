/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  const counter = new Map()
  for (const word of words) {
    for (const c of word) {
      counter.set(c, (counter.get(c) || 0) + 1)
    }
  }

  for (const [word, count] of counter) {
    if (count % words.length) return false
  }
  return true
}
