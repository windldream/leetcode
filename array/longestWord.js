class Trie {
  constructor() {
    this.isEnd = false
    this.children = new Map()
  }
}
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  words.sort((a, b) => a.length - b.length)
  const root = new Trie()
  let maxLen = 0
  let ans = ''

  for (const word of words) {
    let cur = root
    let flag = true
    for (let i = 0; i < word.length; i++) {
      if (!cur.children.has(word[i])) {
        cur.children.set(word[i], new Trie())
        if (i !== word.length - 1) flag = false
      }
      if (!cur.isEnd && cur !== root) flag = false
      cur = cur.children.get(word[i])
    }
    if (flag && word.length >= maxLen) {
      if (word.length > maxLen) {
        maxLen = word.length
        ans = word
      } else {
        ans = ans > word ? word : ans
      }
    }
    cur.isEnd = true
  }
  return ans
}
