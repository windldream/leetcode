/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  const trieNode = new TrieNode()

  for (const word of words) {
    let cur = trieNode
    for (const c of word) {
      const index = c.charCodeAt() - 'a'.charCodeAt()
      if (!cur.children[index]) {
        cur.children[index] = new TrieNode()
      }
      cur = cur.children[index]
    }
    cur.isWord = true
  }

  let longword = ''
  let long = 0
  for (const word of words) {
    if (isBuild(word, trieNode)) {
      if (word.length > long) {
        longword = word
        long = word.length
      } else if (word.length === long) {
        const str = word > longword ? longword : word
        longword = str
        long = str.length
      }
    }
  }
  return longword

  function TrieNode(c) {
    this.isWord = false
    this.children = Array(26).fill(0)
  }

  function isBuild(word, cur) {
    for (const c of word) {
      const index = c.charCodeAt() - 'a'.charCodeAt()
      if (!cur.children[index].isWord) return false
      cur = cur.children[index]
    }
    return true
  }
}
