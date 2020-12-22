/**
 * @param {string[]} dictionary
 */
const ValidWordAbbr = function(dictionary) {
  const map = new Map()
  for (const word of dictionary) {
    const len = word.length
    let str
    if (len < 3) {
      str = word
    } else {
      str = word[0] + (len - 2) + word[len - 1]
    }
    if (!map.has(str)) {
      map.set(str, new Set())
    }
    map.get(str).add(word)
  }
  this.wordMap = map
};

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
  const len = word.length
  let str
  if (len < 3) {
    str = word
  } else {
    str = word[0] + (len - 2) + word[len - 1]
  }

  if (!this.wordMap.has(str)) return true
  if (this.wordMap.has(str)) {
    const list = this.wordMap.get(str)
    if (list.size === 1 && list.has(word)) return true
  }
  return false
};

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */