class Node {
  constructor() {
    this.isEnd = 0
    this.start = 0
    this.children = new Map()
  }
}

var Trie = function () {
  this.root = new Node()
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let root = this.root
  for (const s of word) {
    if (!root.children.has(s)) {
      root.children.set(s, new Node())
    }
    root = root.children.get(s)
    root.start += 1
  }
  root.isEnd += 1
}

/**
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function (word) {
  let root = this.root
  for (const s of word) {
    if (!root.children.has(s)) return 0
    root = root.children.get(s)
  }
  return root.isEnd
}

/**
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function (prefix) {
  let root = this.root
  for (const s of prefix) {
    if (!root.children.has(s)) return 0
    root = root.children.get(s)
  }
  return root.start
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function (word) {
  let root = this.root
  for (const s of word) {
    if (!root.children.has(s)) return
    root = root.children.get(s)
    root.start -= 1
  }
  root.isEnd -= 1
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */
