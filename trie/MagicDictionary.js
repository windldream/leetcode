/**
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
  this.root = new TrieNode()
}

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
  for (const word of dictionary) {
    this.addWord(word)
  }
}

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  return this.findWord(this.root, searchWord, 0, false)
}

MagicDictionary.prototype.addWord = function (word) {
  let cur = this.root
  for (const c of word) {
    const index = c.charCodeAt() - 'a'.charCodeAt()
    if (!cur.children[index]) {
      cur.children[index] = new TrieNode()
    }
    cur = cur.children[index]
  }
  cur.isWord = true
}

MagicDictionary.prototype.findWord = function (cur, word, index, isMod) {
  if (!cur) return false
  if (index === word.length) {
    return isMod && cur.isWord
  } else {
    for (let i = 0; i < 26; i++) {
      if (cur.children[i]) {
        if (word[index].charCodeAt() - i === 'a'.charCodeAt()) {
          if (this.findWord(cur.children[i], word, index + 1, isMod)) return true
        } else if (!isMod && this.findWord(cur.children[i], word, index + 1, true)) return true
      }
    }
    return false
  }
}

function TrieNode() {
  this.isWord = false
  this.children = Array(26).fill(0)
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
