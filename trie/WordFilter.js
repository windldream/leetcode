/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  this.trieNode = new TrieNode()
  for (let weight = 0; weight < words.length; weight++) {
    const word = words[weight] + '{'
    for (let i = 0; i < word.length; i++) {
      let cur = this.trieNode
      cur.weigth = weight
      for (let j = i; j < 2 * word.length - 1; j++) {
        const index = word[j % word.length].charCodeAt() - 'a'.charCodeAt()
        if (!cur.children[index]) {
          cur.children[index] = new TrieNode()
        }
        cur = cur.children[index]
        cur.weigth = weight
      }
    }
  }
}

/**
 * @param {string} prefix
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function (prefix, suffix) {
  let cur = this.trieNode
  for (const c of suffix + '{' + prefix) {
    const index = c.charCodeAt() - 'a'.charCodeAt()
    if (!cur.children[index]) return -1
    cur = cur.children[index]
  }
  return cur.weigth
}

function TrieNode() {
  this.weigth = 0
  this.children = Array(27).fill(0)
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */
