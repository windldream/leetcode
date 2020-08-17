/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  this.trieNode = new TrieNode()
}

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  let cur = this.trieNode
  for (const c of key) {
    const index = c.charCodeAt() - 'a'.charCodeAt()
    if (!cur.children[index]) {
      cur.children[index] = new TrieNode()
    }
    cur = cur.children[index]
  }
  cur.isWord = true
  cur.val = val
}

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  if (!prefix) return 0
  let cur = this.trieNode
  for (const c of prefix) {
    const index = c.charCodeAt() - 'a'.charCodeAt()
    if (cur.children[index]) {
      cur = cur.children[index]
    } else {
      return 0
    }
  }

  return getVal(cur)

  function getVal(cur) {
    if (!cur) return 0

    let sum = 0
    if (cur.isWord) {
      sum += cur.val
    }
    for (let i = 0; i < 26; i++) {
      sum += getVal(cur.children[i])
    }
    return sum
  }
}

function TrieNode() {
  this.isWord = false
  this.val = 0
  this.children = Array(26).fill(0)
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
