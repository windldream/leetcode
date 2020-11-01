/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  words.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b)
    }
    return b.length - a.length
  })

  const set = new Set(words)
  for (const word of words) {
    set.delete(word)
    if (check(set, word)) {
      return word
    }
    set.add(word)
  }
  return ''

  function check(set, word) {
    if (word.length === 0) return true
    for (let i = 0; i < word.length; i++) {
      if (set.has(word.substring(0, i + 1)) && check(set, word.substring(i + 1))) return true
    }
    return false
  }
}
