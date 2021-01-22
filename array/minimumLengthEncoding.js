class TrieNode {
  constructor() {
    this.val = ''
    this.children = Array(26).fill(null)
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }
  insert(word) {
    let cur = this.root
    let isNew = false
    for (let i = word.length - 1; i >= 0; i--) {
      const c = word[i].charCodeAt() - 'a'.charCodeAt()
      if (cur.children[c] === null) {
        isNew = true
        cur.children[c] = new TrieNode()
      }
      cur = cur.children[c]
    }
    return isNew ? word.length + 1 : 0
  }
}

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  let ans = 0
  const trie = new Trie()
  words.sort((a, b) => b.length - a.length)
  for (const word of words) {
    ans += trie.insert(word)
  }
  return ans
}
