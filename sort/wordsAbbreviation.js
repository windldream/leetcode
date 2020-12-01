/**
 * @param {string[]} dict
 * @return {string[]}
 */
var wordsAbbreviation = function (dict) {
  const len = dict.length
  const ans = []
  const prefix = Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    ans.push(abbrev(dict[i], 0))
  }

  for (let i = 0; i < len; i++) {
    while (true) {
      const set = new Set()
      for (let j = i + 1; j < len; j++) {
        if (ans[i] === ans[j]) {
          set.add(j)
        }
      }
      if (set.size === 0) break
      set.add(i)
      for (const k of set) {
        ans[k] = abbrev(dict[k], ++prefix[k])
      }
    }
  }
  return ans

  function abbrev(word, i) {
    const len = word.length
    if (len - i <= 3) return word
    return word.substring(0, i + 1) + (len - i - 2) + word[len - 1]
  }
}

wordsAbbreviation(['like', 'god', 'internal', 'me', 'internet', 'interval', 'intension', 'face', 'intrusion'])
