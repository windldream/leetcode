class Node {
  constructor() {
    this.isEnd = false
    this.children = new Map()
  }
}
/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new Node()
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let root = this.root
  for (const c of word) {
    if (!root.children.has(c)) root.children.set(c, new Node())
    root = root.children.get(c)
  }
  root.isEnd = true
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let root = this.root
  for (const c of word) {
    if (!root.children.has(c)) return false
    root = root.children.get(c)
  }
  return root.isEnd
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let root = this.root
  for (const c of prefix) {
    if (!root.children.has(c)) return false
    root = root.children.get(c)
  }
  return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
