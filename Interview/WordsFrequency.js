/**
 * @param {string[]} book
 */
var WordsFrequency = function (book) {
  const map = new Map()
  for (const str of book) {
    map.set(str, (map.get(str) || 0) + 1)
  }
  this.map = map
}

/**
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function (word) {
  return this.map.get(word) || 0
}

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */
