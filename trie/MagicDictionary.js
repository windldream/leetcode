/**
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
  this.list = []
}

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
  this.list.push(...dictionary)
}

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  return this.list.some((str) => {
    let diff = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== searchWord[i]) {
        diff++
      }
    }
    return diff === 1
  })
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
